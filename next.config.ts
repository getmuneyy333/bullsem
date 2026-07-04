import type { NextConfig } from "next";

const basePath = process.env.GITHUB_PAGES === "true" ? "/bullsem" : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(basePath ? { basePath, assetPrefix: `${basePath}/` } : {}),
};

export default nextConfig;
