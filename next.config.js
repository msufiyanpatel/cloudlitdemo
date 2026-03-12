/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      { source: '/services', destination: '/services/cloud', permanent: true },
    ];
  },
};
module.exports = nextConfig;
