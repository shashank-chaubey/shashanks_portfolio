import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep `next dev` output separate from `next build` so a production build
  // cannot replace chunks that an already-running development server serves.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
};

export default nextConfig;
