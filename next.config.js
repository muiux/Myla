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
      {
        source: "/dash",
        destination: "/dash/my-leads",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
