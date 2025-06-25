/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['i.ibb.co'], // Allow image loading from this domain
  },
}

module.exports = nextConfig;
