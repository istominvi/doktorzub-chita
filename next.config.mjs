const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const hasCustomDomain = process.env.HAS_CUSTOM_DOMAIN === 'true'

// Two-mode strategy:
// 1) Custom domain (root): ""
// 2) Project pages (repo prefix): "/doktorzub-chita"
// Local and Vercel stay on root paths.
const basePath = isGithubActions
  ? hasCustomDomain
    ? ''
    : '/doktorzub-chita'
  : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

export default nextConfig
