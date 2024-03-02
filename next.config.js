/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REACT_APP_LINKBRARY_URL: process.env.REACT_APP_LINKBRARY_URL,
  },
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'cloudflare-ipfs.com',
      'codeit-images.codeit.com',
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
