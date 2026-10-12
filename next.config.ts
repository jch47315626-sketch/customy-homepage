import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 서버 없이 어디든 올릴 수 있는 정적 사이트로 빌드 (out/)
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
