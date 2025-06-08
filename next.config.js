/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint{
  ignoreDuringBuilds:true;
},
  images: {
    domains: ['i.ibb.co'], // Add i.ibb.co to allow image loading from this domain
  },
}

module.exports = nextConfig
