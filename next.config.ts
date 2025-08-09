import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Agrega esta sección para ignorar los errores de ESLint durante el build
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* Otras opciones de configuración (puedes dejarlas si las tenías) */
};

export default nextConfig;
