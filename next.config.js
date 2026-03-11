/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // ESLint runs separately in CI; skip during next build
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      { source: '/services', destination: '/services/cloud', permanent: true },
    ];
  },
};
module.exports = nextConfig;
