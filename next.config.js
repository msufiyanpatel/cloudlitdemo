/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    MAIL_TO: process.env.MAIL_TO,
  },
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      { source: '/services', destination: '/services/cloud', permanent: true },
    ];
  },
};
module.exports = nextConfig;
