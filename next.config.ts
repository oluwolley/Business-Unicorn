import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thebusinessunicorn.co.uk",
      },
      {
        protocol: "https",
        hostname: "**.thebusinessunicorn.co.uk",
      },
    ],
  },
};

export default nextConfig;
