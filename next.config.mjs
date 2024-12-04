/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  productionBrowserSourceMaps: true,
  webpack(config,{ dev }) {
    if (dev) {
      config.devtool = false;  // 禁用源映射
    }
    return config;
  },
};

export default nextConfig;
