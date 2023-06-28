/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dash",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
