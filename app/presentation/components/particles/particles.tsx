"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  angle: number;
  speed: number; // px/secs
  baseAlpha: number; // 0.2 - 0.4
  pulseAmp: number; // ~0.05
  pulseFreq: number; // 0.05 - 0.15 Hz
  pulsePhase: number; // random phase
  blur: number; // 0.8 - 1.6 px for depth
};

const PARTICLE_COUNT = 20; // Entre 15 e 25
const COLOR = "#505051"; // Cinza médio
const SIZE = 4.5; // tamanho único em px (diâmetro)
// Escala de velocidade para tornar 0.3–0.8 perceptível em px/seg (mediano)
const VELOCITY_SCALE = 24; // ajuste "mediano" visível

export default function ParticlesOverlay() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[] | null>(null);
  const dprRef = useRef<number>(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Configura DPI para nitidez
    const setupCanvasSize = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      dprRef.current = dpr;
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // desenha em unidades CSS
    };

    setupCanvasSize();

    // Inicializa partículas distribuídas por toda a tela
    const createParticles = (count: number): Particle[] => {
      const { innerWidth: w, innerHeight: h } = window;
      const particles: Particle[] = [];
      for (let i = 0; i < count; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const angle = Math.random() * Math.PI * 2; // direções variadas
        const speedNorm = 0.3 + Math.random() * 0.5; // 0.3 - 0.8 (norm.)
        const speed = speedNorm * VELOCITY_SCALE; // px/sec perceptível
        const baseAlpha = 0.2 + Math.random() * 0.2; // 0.2 - 0.4
        const pulseAmp = 0.03 + Math.random() * 0.03; // leve pulsar
        const pulseFreq = 0.05 + Math.random() * 0.1; // Hz (ciclos por segundo)
        const pulsePhase = Math.random() * Math.PI * 2;
        const blur = 0.8 + Math.random() * 0.8; // profundidade via blur
        particles.push({ x, y, angle, speed, baseAlpha, pulseAmp, pulseFreq, pulsePhase, blur });
      }
      return particles;
    };

    particlesRef.current = createParticles(PARTICLE_COUNT);

    let lastTime = performance.now();

    const step = (now: number) => {
      const dt = (now - lastTime) / 1000; // segundos
      lastTime = now;

      const { innerWidth: w, innerHeight: h } = window;
      ctx.clearRect(0, 0, w, h);

      // Sem brilho: composição normal
      ctx.globalCompositeOperation = "source-over";

      const particles = particlesRef.current || [];
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // leve deriva orgânica: gira ângulo lentamente
        const drift = (Math.random() - 0.5) * 0.15; // rad/s aleatório por frame para organicidade sutil
        p.angle += drift * dt;

        // atualiza posição
        const vx = Math.cos(p.angle) * p.speed;
        const vy = Math.sin(p.angle) * p.speed;
        p.x += vx * dt;
        p.y += vy * dt;

        // wrap nas bordas para movimento contínuo
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        // Sem pulsar: opacidade constante dentro de 0.2–0.4
        const alpha = p.baseAlpha;

        // Sem glow: sem filtro de blur
        ctx.globalAlpha = alpha;
        ctx.fillStyle = COLOR;

        // todas com mesmo tamanho
        const r = SIZE / 2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      // reset para próxima iteração
      ctx.filter = "none";
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;

      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);

    const onResize = () => {
      setupCanvasSize();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 10,
      }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
}