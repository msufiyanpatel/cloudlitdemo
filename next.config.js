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
    SMTP_USER: process.env.SMTP_USER || 'admin@cloudlit.co',
    SMTP_PASS: process.env.SMTP_PASS || 'cloudlitguy@123',
    MAIL_TO: process.env.MAIL_TO || 'admin@cloudlit.co',
  },
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      { source: '/services', destination: '/services/cloud', permanent: true },
    ];
  },
};
module.exports = nextConfig;
