/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Export static HTML
  images: {
    unoptimized: true,
  },
};

export default nextConfig;