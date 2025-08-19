/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: './',
  images: {
    unoptimized: true
  },
  experimental: {
    webpackBuildWorker: false,
  },
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;
