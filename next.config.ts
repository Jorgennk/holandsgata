const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  ...(isProd && { output: "export" }), // Only apply static export in production
  trailingSlash: true,
};

module.exports = nextConfig;
