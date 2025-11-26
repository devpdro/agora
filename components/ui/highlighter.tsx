"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface HighlighterProps {
  children: React.ReactNode;
  action?: "highlight" | "underline";
  color?: string;
  className?: string;
  animationDuration?: number;
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#FFD700",
  className,
  animationDuration = 1000,
}: HighlighterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  if (action === "underline") {
    return (
      <span
        ref={ref}
        className={cn("relative inline-block", className)}
        style={{
          textDecoration: "none",
        }}
      >
        {children}
        <motion.span
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{
            backgroundColor: color,
          }}
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{
            duration: animationDuration / 1000,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      </span>
    );
  }

  return (
    <span
      ref={ref}
      className={cn("relative inline-block px-1", className)}
    >
      {children}
      <motion.span
        className="absolute inset-0 -z-10"
        style={{
          backgroundColor: color,
          opacity: 0.3,
        }}
        initial={{ scaleX: 0 }}
        animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{
          duration: animationDuration / 1000,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
    </span>
  );
}






