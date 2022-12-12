/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_ENV: 'PRODUCTION',
  },
  experimental: {
    nextScriptWorkers: true,
  },
  async rewrites() {
    return [
      {
        source: '/bud.js',
        destination: 'https://usebud.vercel.app/track.js',
      },
    ];
  }
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
  
module.exports = withBundleAnalyzer(nextConfig);

