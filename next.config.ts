import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites : async () => {
    const baseURL = process.env.BASE_URL
    return [
      {
        source: "/api/portfolio",
        destination: `${baseURL}/portfolio`,
      },
    ];
  },
};

export default nextConfig;
