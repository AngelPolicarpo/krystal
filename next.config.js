/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/webp'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'static.wixstatic.com',
            port: '',
            pathname: '/media/**',
          },
        ],
      },
    
}

module.exports = nextConfig
