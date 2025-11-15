import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Garantir que o Turbopack use este diretório como root
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
