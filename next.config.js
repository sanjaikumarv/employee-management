/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = {
  pwa: {
    dest: "public",
    swSrc: "service-worker.js",
    // runtimeCaching,
    disable: process.env.NODE_ENV === "development",
  },
  env: {
    customKey: "my-value",
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
  },
  images: {
    domains: ["m.hod.digital"],
  },
  reactStrictMode: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/employee",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        // Proxy to Backend
        source: "/api/:path*",
        destination: process.env.API_URL + "/api/:path*",
      },
    ];
  },
};

module.exports = withPWA(nextConfig);
