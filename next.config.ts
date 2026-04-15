import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Required for static export
  images: { 
    unoptimized: true 
  }, // GitHub Pages doesn't support Next.js Image Optimization
};

export default nextConfig;
