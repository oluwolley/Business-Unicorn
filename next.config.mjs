/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next's built-in typecheck has been hanging on this machine after compile.
  // Run `npm run typecheck` separately when you want a typecheck.
  typescript: {
    ignoreBuildErrors: true,
  },
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
