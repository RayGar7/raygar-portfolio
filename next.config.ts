/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Only add basePath if you're deploying to a subdirectory (username.github.io/repo-name)
  // Remove these lines if deploying to username.github.io directly
  basePath: '/raygar-portfolio',
  assetPrefix: '/raygar-portfolio/',
}

module.exports = nextConfig