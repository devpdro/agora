"use client";

import React, { useEffect, useRef } from "react";
import styles from "./face.module.scss";

// Three.js imports (loaded on client)
import * as THREE from "three";

// Paleta cromática solicitada
const PALETTE = {
  steelGray: new THREE.Color("#505051"),
  deepBrown: new THREE.Color("#392C19"),
  coalBrown: new THREE.Color("#241F17"),
  oliveGray: new THREE.Color("#474535"),
  graphite: new THREE.Color("#59595B"),
  silver: new THREE.Color("#C8C8CC"), // prata dominante (ligeiramente quente)
};

// GLSL helpers: noise e mapeamento de faixas topográficas com deslocamento dinâmico
const vertexShader = /* glsl */ `
  precision highp float;
  precision highp int;
  varying vec3 vPos;
  varying vec3 vNormal;
  uniform float uTime;

  // 3D Simplex noise (Ashima)
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);} 
  float snoise(vec3 v){
    // inclui C.z = 1/7 para evitar erro de seleção de componente
    const vec3  C = vec3(1.0/6.0, 1.0/3.0, 1.0/7.0);
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
    vec3 x3 = x0 - D.yyy;      // -1.0 + 3.0*C.x = -0.5 = -D.y

    i = mod(i, 289.0 );
    vec4 p = permute( permute( permute( 
               i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
             + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    vec4 j = p - 289.0*floor(p/289.0);

    vec4 x_ = floor(j * C.z);
    vec4 y_ = floor(j - 7.0 * x_ );
    vec4 x = x_ *C.x + C.y;
    vec4 y = y_ *C.x + C.y;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a1.xy,h.y);
    vec3 p2 = vec3(a0.zw,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    vec4 norm = 1.79284291400159 - 0.85373472095314 *
                vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;

    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
  }

  void main(){
    vPos = position;
    vNormal = normal;

    // Perfil do crânio/mandíbula para formar um rosto
    vec3 p = position;
    float skull = smoothstep(-0.9, 0.6, p.y);           // topo maior, mandíbula menor
    float jawScale = mix(0.65, 1.15, skull);
    p.xz *= jawScale;

    // Nariz (leve protrusão frontal)
    float nose = exp(-dot(p.xy, p.xy) * 12.0) * smoothstep(-0.05, 0.35, p.y);
    p.z += nose * 0.14;

    // Cavidades dos olhos
    float eyeL = exp(-((p.x+0.28)*(p.x+0.28) + (p.y-0.15)*(p.y-0.15)) * 40.0);
    float eyeR = exp(-((p.x-0.28)*(p.x-0.28) + (p.y-0.15)*(p.y-0.15)) * 40.0);
    p.z -= (eyeL + eyeR) * 0.05;

    // Boca/queixo
    float mouth = exp(-((p.y+0.05)*(p.y+0.05) + (p.z-0.05)*(p.z-0.05)) * 30.0);
    p.z -= mouth * 0.03;
    float chin = exp(-((p.y+0.55)*(p.y+0.55) + p.x*p.x) * 22.0);
    p.z += chin * 0.12;

    // deformações orgânicas nas "camadas"
    float n = snoise(normalize(p) * 1.2 + vec3(0.0, uTime * 0.25, uTime * 0.1));
    float band = sin((p.y + n * 0.35) * 6.0 + uTime * 0.8);
    vec3 displaced = p + normalize(p) * band * 0.05; // ondulações mais suaves

    gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  precision highp int;
  varying vec3 vPos;
  varying vec3 vNormal;
  uniform float uTime;
  uniform vec3 uSilver;
  uniform vec3 uSteel;
  uniform vec3 uDeepBrown;
  uniform vec3 uCoalBrown;
  uniform vec3 uOliveGray;
  uniform vec3 uGraphite;
  uniform vec3 uLightDir;

  float sat(float x){return clamp(x, 0.0, 1.0);} 

  // bandas topográficas móveis
  float bands(vec3 p){
    float b = sin(p.y*6.0 + uTime*0.8) * 0.5 + 0.5;
    b += sin(p.x*2.0 + uTime*0.35)*0.12;
    b += sin(p.z*3.0 - uTime*0.25)*0.12;
    return sat(b);
  }

  // Fresnel suave para brilho metálico
  float fresnel(vec3 n, vec3 v){
    return pow(1.0 - sat(dot(n, v)), 3.0);
  }

  void main(){
    vec3 n = normalize(vNormal);
    vec3 v = normalize(-vec3(0.0,0.0,1.0));
    vec3 l = normalize(uLightDir);

    float diff = sat(dot(n, l));
    float f = fresnel(n, v);

    float b = bands(vPos);

    // mistura cromática com prata dominante
    vec3 c1 = mix(uSteel, uGraphite, b);
    vec3 c2 = mix(uOliveGray, uDeepBrown, b*0.6);
    vec3 baseCol = mix(c1, c2, 0.35);
    baseCol = mix(baseCol, uCoalBrown, 0.15);
    vec3 silverBoost = mix(baseCol, uSilver, 0.55);

    // iluminação metálica suave
    vec3 color = silverBoost * (0.25 + 0.65*diff) + f * 0.45;

    // leve oclusão por bandas para dar profundidade
    color *= 0.9 + 0.1 * sin(vPos.y*10.0 + uTime*0.8);

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function Face() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 0.4, 3.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearAlpha(0); // transparência real
    container.appendChild(renderer.domElement);

    // Grupo que gira lentamente
    const group = new THREE.Group();
    scene.add(group);

    // Material com shaders líquidos
    const uniforms = {
      uTime: { value: 0 },
      uSilver: { value: PALETTE.silver },
      uSteel: { value: PALETTE.steelGray },
      uDeepBrown: { value: PALETTE.deepBrown },
      uCoalBrown: { value: PALETTE.coalBrown },
      uOliveGray: { value: PALETTE.oliveGray },
      uGraphite: { value: PALETTE.graphite },
      uLightDir: { value: new THREE.Vector3(0.6, 0.8, 0.6) },
    };

    const mat = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      lights: false,
      transparent: true,
      side: THREE.DoubleSide,
    });

    // Utilitário: esculpir cabeça para formato humano
    const sculptHead = (geo: THREE.SphereGeometry) => {
      const pos = geo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const z = pos.getZ(i);
        let px = x, py = y, pz = z;

        // crânio elíptico e mandíbula mais estreita
        const t = THREE.MathUtils.clamp((py + 1.0) / 1.6, 0, 1);
        const skullScale = 0.8 + 0.50 * t; // 0.8 -> 1.3 topo
        px *= skullScale; pz *= skullScale;

        // achatar levemente a face frontal para a silhueta do rosto
        const frontal = THREE.MathUtils.smoothstep(py, -0.2, 0.6);
        pz *= 1.0 - frontal * 0.06;

        // afinar lateral inferior (queixo)
        const chinNarrow = THREE.MathUtils.smoothstep(py, -0.9, -0.3);
        px *= 0.9 + 0.1 * (1.0 - chinNarrow);

        // nariz mais definido
        const nose = Math.exp(-((px*px) + Math.pow(py-0.05, 2)) * 8.0) * THREE.MathUtils.clamp(py, -0.05, 0.40);
        pz += nose * 0.24;

        // cavidades dos olhos (recuo)
        const eyeL = Math.exp(-((px+0.26)**2 + (py-0.1)**2) * 32.0);
        const eyeR = Math.exp(-((px-0.26)**2 + (py-0.1)**2) * 32.0);
        pz -= (eyeL + eyeR) * 0.10;

        // maçãs do rosto (leve volume lateral)
        const cheek = Math.exp(-((py-0.02)**2) * 7.0);
        px *= 1.0 + cheek * 0.08;

        // boca/queixo
        const mouth = Math.exp(-((py+0.05)**2 + (pz-0.03)**2) * 20.0);
        pz -= mouth * 0.05;
        const chin = Math.exp(-((py+0.55)**2 + (px*px)) * 16.0);
        pz += chin * 0.14;

        pos.setXYZ(i, px, py, pz);
      }
      geo.computeVertexNormals();
      pos.needsUpdate = true;
    };

    // Geometrias para um busto estilizado (cabeça + pescoço + base) com escultura
    const headGeo = new THREE.SphereGeometry(0.9, 192, 192);
    sculptHead(headGeo);
    const head = new THREE.Mesh(headGeo, mat);
    head.position.y = 0.35;
    head.scale.set(1.0, 1.15, 1.0);
    group.add(head);

    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.5, 0.7, 96, 1, true), mat);
    neck.position.y = -0.35;
    group.add(neck);

    // ombros/base tipo busto
    const points: THREE.Vector2[] = [];
    points.push(new THREE.Vector2(0.0, -1.0));
    points.push(new THREE.Vector2(0.6, -0.95));
    points.push(new THREE.Vector2(0.9, -0.85));
    points.push(new THREE.Vector2(1.1, -0.65));
    points.push(new THREE.Vector2(1.25, -0.3));
    points.push(new THREE.Vector2(1.2, 0.0));
    const lathe = new THREE.LatheGeometry(points, 96);
    const base = new THREE.Mesh(lathe, mat);
    base.position.y = -0.9;
    group.add(base);

    // Orelhas estilizadas
    const earL = new THREE.Mesh(new THREE.CapsuleGeometry(0.20, 0.22, 8, 16), mat);
    earL.position.set(-0.72, 0.05, 0.02);
    earL.rotation.set(0.0, Math.PI / 2, 0.15);
    group.add(earL);

    const earR = earL.clone();
    earR.position.x = 0.72;
    group.add(earR);

    // resize
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(container);

    let start = performance.now();
    const animate = () => {
      const t = (performance.now() - start) / 1000;
      uniforms.uTime.value = t;
      // rotação lenta 360° ~ a cada ~8s
      group.rotation.y = t * (Math.PI * 2) / 10.0; // um pouco mais lento
      group.rotation.x = Math.sin(t * 0.2) * 0.05;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      ro.disconnect();
      renderer.dispose();
      container.removeChild(renderer.domElement);
      scene.clear();
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.canvasWrap} ref={mountRef} />
      <div className={styles.gridBG} />
      <div className={styles.hint}>Awwwards Conference</div>
    </div>
  );
}