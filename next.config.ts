import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/raygar-portfolio',
  assetPrefix: '/raygar-portfolio',
  reactCompiler: true,
};

export default nextConfig;
