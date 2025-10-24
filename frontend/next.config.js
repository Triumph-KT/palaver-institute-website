/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Netlify deployment
  output: 'export',
  trailingSlash: true,
  
  // Enable experimental features for better performance
  experimental: {
    typedRoutes: true,
  },
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_APP_NAME: 'Palaver Institute',
    NEXT_PUBLIC_APP_VERSION: '1.0.0',
  },
  
  // SEO and performance optimizations
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
};

module.exports = nextConfig;
