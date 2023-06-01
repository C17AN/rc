/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/",
        destination: "/icon",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
