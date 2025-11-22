"use client";

import { useMemo } from "react";
import { useTheme } from "next-themes";
import { Particles } from "@/registry/magicui/particles";

export default function ParticlesOverlay() {
  const { resolvedTheme } = useTheme();
  const color = useMemo(() => (resolvedTheme === "dark" ? "#ffffff" : "#000000"), [resolvedTheme]);

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 10 }}>
      <Particles quantity={100} ease={80} color={color} refresh />
    </div>
  );
}