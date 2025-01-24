/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Ensures static export instead of using server features
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/kommune-shield-game/" : "",
  basePath: process.env.NODE_ENV === "production" ? "/kommune-shield-game" : "",
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
};

export default nextConfig;
