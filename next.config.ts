import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: isProd ? "https://calibrato-website.vercel.app" : undefined,
};

export default nextConfig;
