/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["placehold.co"],
  // },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/chatFreemium',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

