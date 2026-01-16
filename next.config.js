/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Removed 'output: export' to enable API routes
  // If you need static export for production, use it conditionally or deploy with server support
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig

