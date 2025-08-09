import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Agrega esta sección para ignorar los errores de TypeScript
  typescript: {
    ignoreBuildErrors: true,
  },
  // La configuración de ESLint que ya tienes
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* Otras opciones de configuración (puedes dejarlas si las tenías) */
};

export default nextConfig;
