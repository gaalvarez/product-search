/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'http',
  //       hostname: 'http2.mlstatic.com',
  //       port: '',
  //       pathname: '/',
  //     },
  //   ],
  // },
  images: {
    domains: ['http2.mlstatic.com'],
  },
}

module.exports = nextConfig
