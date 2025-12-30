import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // Set basePath for GitHub Pages subdirectory deployment
  basePath: isProd ? "/wenyechen.github.io" : "",
  assetPrefix: isProd ? "/wenyechen.github.io/" : "",
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes for GitHub Pages compatibility
  trailingSlash: true,
};

export default nextConfig;
