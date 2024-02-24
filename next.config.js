/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com'], // 이미지 호스트 이름 추가
  },
  reactStrictMode: true,
}

module.exports = nextConfig
