/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['avatars.dicebear.com', 'www.w3.org']
  },
  reactStrictMode: true
}

module.exports = nextConfig
