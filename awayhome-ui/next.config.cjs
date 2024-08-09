const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  output: 'standalone', // Important for Firebase Hosting
});
