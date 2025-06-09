import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "192.168.18.44",
    "*.192.168.18.44",
    "192.168.18.8",
    "*.192.168.18.8",
    "localhost",
    "127.0.0.1",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.18.44",
        port: "3000",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "192.168.18.8",
        port: "3000",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
