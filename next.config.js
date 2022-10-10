/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'pbs.twimg.com',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.woff2$/,
      use: ['url-loader'],
    })
    return config
  },
}

module.exports = nextConfig
