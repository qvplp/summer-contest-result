/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './imageLoader.js',
    domains: ['contest001.pinyogram.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'contest001.pinyogram.com',
        pathname: '/pinyogram-contest-images/**',
      },
    ],
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
