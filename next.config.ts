// next.config.mjs or next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // other config options
};

export default nextConfig;

/// !!!!!!!!!!! ignored TS errors 