const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  trailingSlash: true,
  output: 'export',  // Use 'standalone' for server environments
  babel: {
    presets: ['next/babel'],
    plugins: [],
  },
  images: {
    unoptimized: true,
  },
});
