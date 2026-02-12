const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const explicitBasePath = process.env.BASE_PATH
function normalizeBasePath(pathValue) {
  if (!pathValue || pathValue === '/') return ''
  return pathValue.startsWith('/') ? pathValue : `/${pathValue}`
}

// Strategy:
// 1) BASE_PATH (manual override) has top priority.
// 2) In GitHub Actions by default -> repo prefix for project-pages URL.
// 3) Local/Vercel by default -> root paths.
const basePath = explicitBasePath !== undefined
  ? normalizeBasePath(explicitBasePath)
  : isGithubActions
    ? '/doktorzub-chita'
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
