/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // This replaces the need for 'next export'
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/kommune-shield-game/" : "",
  basePath: process.env.NODE_ENV === "production" ? "/kommune-shield-game" : "",
  images: {
    unoptimized: true, // Required for static exports with Next.js
  },
};

module.exports = nextConfig;
