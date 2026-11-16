import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "isfs-website\\.vercel\\.app" }],
        destination: "https://www.isfsuae.com/:path*",
        permanent: true,
      },
    ];
  },
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
