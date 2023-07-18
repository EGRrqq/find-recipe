/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "edamam-product-images.s3.amazonaws.com",
        port: '',
        pathname: '/web-img/**'
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: '',
        pathname: '/**'
      },
    ],
  },
};

module.exports = nextConfig;
