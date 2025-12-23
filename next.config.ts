import type { NextConfig } from "next";
import { BASE_URL } from "./src/config";

const nextConfig: NextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/portfolio",
        destination: `${BASE_URL}/portfolio`,
      },
    ];
  },
};

export default nextConfig;
