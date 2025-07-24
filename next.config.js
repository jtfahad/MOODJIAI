/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["placehold.co"],
  // },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/landing-page',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

