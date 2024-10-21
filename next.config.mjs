/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  basePath: isProd ? '/MyFolio' : '', // Important: set to your GitHub Pages subdirectory
  assetPrefix: isProd ? '/MyFolio/' : '', // Important: prefix static assets with the subdirectory
  output: 'export', // Export static HTML
  images: {
    unoptimized: true, // Disable image optimization (GitHub Pages doesn't support it)
  },
};

export default nextConfig;

