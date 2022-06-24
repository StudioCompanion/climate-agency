/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  redirects() {
    return [
      {
        source: '/our-mission',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
