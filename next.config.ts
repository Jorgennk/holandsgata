const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/holandsgata" : '',
};

module.exports = nextConfig;
