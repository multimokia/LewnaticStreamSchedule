/** @type {import("next").NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
    ];
  }
};

module.exports = nextConfig;
