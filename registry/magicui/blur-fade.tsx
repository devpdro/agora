"use client";

import { useEffect, useRef, useState } from "react";

type BlurFadeProps = {
  children: React.ReactNode;
  delay?: number;
  inView?: boolean;
  className?: string;
};

export function BlurFade({ children, delay = 0, inView = true, className }: BlurFadeProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(!inView);

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;
    const obs = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry && entry.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [inView]);

  const style: React.CSSProperties = {
    transition: `opacity 500ms ease ${delay}s, filter 500ms ease ${delay}s, transform 500ms ease ${delay}s`,
    opacity: visible ? 1 : 0,
    filter: visible ? "blur(0px)" : "blur(8px)",
    transform: visible ? "translateY(0)" : "translateY(8px)",
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}