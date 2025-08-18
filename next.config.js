/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pagesでキャッシュファイルが大きすぎる問題を解決
  experimental: {
    webpackBuildWorker: false,
  },
  webpack: (config, { isServer }) => {
    // キャッシュを無効化
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;
