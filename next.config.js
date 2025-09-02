/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["placehold.co"],
  // },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

