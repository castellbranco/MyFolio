/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Export static HTML
  images: {
    unoptimized: true, // Disable image optimization (GitHub Pages doesn't support it)
  },
};

export default nextConfig;
