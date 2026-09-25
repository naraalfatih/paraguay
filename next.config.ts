import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [new URL("https://d8j0ntlcm91z4.cloudfront.net/user_3IcnjIyrilAoNvFlEquouraatLL/**")],
  },
};

export default nextConfig;
