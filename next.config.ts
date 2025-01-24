/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Ensures static HTML export
  basePath: "/holandsgata", // Update with your GitHub repo name
  trailingSlash: true, // Ensures URLs work correctly
};

module.exports = nextConfig;
