const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? "/holandsgata" : "",
  basePath: isProd ? "/holandsgata" : "",
  images: {
    unoptimized: true, // Required for static exports
  },
};
