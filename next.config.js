/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,  
    output: 'export',
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
