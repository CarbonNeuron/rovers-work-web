import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'standalone',
  
  compiler: {
    // Remove console logs in production for smaller bundles
    removeConsole: process.env.NODE_ENV === "production",
  },
  typedRoutes: true
};

export default nextConfig;
