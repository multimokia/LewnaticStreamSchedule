/** @type {import("next").NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/index.html",
      destination: "/",
    },
    {
      source: "/config.html",
      destination: "/config",
    },
  ],
};

module.exports = nextConfig;
