import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      remotePatterns: [
          {
            protocol: "https",
            hostname: "fortnite-api.com",
          },
          {
            protocol: "https",
            hostname: "retrac.site",
          }
      ],
  },
};

export default nextConfig;
