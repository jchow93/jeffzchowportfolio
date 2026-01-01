/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Ensure no server-side rendering in dev mode
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

module.exports = nextConfig;

