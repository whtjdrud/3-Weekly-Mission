/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REACT_APP_LINKBRARY_URL: process.env.REACT_APP_LINKBRARY_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'cloudflare-ipfs.com',
      },
      {
        protocol: 'https',
        hostname: 'codeit-images.codeit.com',
      },
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
