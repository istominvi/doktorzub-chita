/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/doktorzub-chita',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/doktorzub-chita',
  },
}

export default nextConfig
