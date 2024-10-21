/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  basePath: isProd ? '/MyFolio' : '', // Assuming your repo is called MyFolio
  assetPrefix: isProd ? '/MyFolio/' : '',
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // Because GitHub Pages doesn't support dynamic image optimization
  },
};

export default nextConfig;
