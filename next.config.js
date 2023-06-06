/** @type {import("next").NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/index.html",
      destination: "/",
    },
  ],
};

module.exports = nextConfig;
