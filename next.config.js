/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Ignore ESLint errors during Vercel build (optional but useful for CI)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Optional: Enable experimental or future flags here
  experimental: {
    // appDir: true, // Uncomment if you're using the /app directory
  },

  // Optional: Image domains or other custom configs
  images: {
    domains: ['devrhylme.org'], // Replace with actual image domains if needed
  },
};

module.exports = nextConfig;
