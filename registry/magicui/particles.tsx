"use client";

import { useEffect, useRef } from "react";

type ParticlesProps = {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  refresh?: boolean;
  color?: string;
  vx?: number;
  vy?: number;
};

export function Particles({
  className,
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<{ x: number; y: number; vx: number; vy: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      const w = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
      const h = canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      const w = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
      const h = canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;
      const jitter = (100 - staticity) / 100;
      particlesRef.current = Array.from({ length: quantity }).map(() => {
        const ang = Math.random() * Math.PI * 2;
        const jx = (Math.cos(ang) * 0.2 + (Math.random() - 0.5)) * jitter;
        const jy = (Math.sin(ang) * 0.2 + (Math.random() - 0.5)) * jitter;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: vx + jx,
          vy: vy + jy,
        };
      });
    };

    setSize();
    init();

    const step = () => {
      const w = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
      const h = canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = color;
      const r = Math.max(0.5, size * 2);
      const factor = Math.max(0.05, Math.min(1, ease / 100));
      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i];
        p.x += p.vx * factor;
        p.y += p.vy * factor;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);

    const onResize = () => {
      setSize();
      init();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [quantity, staticity, ease, size, refresh, color, vx, vy]);

  return (
    <div className={className} style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      <canvas ref={canvasRef} />
    </div>
  );
}