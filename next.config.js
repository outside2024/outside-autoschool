/** @type {import('next').NextConfig} */
const path = require('path');
const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  //TODO delete , this is for mock data
  images: {
    domains: ['www.shadowsphotography.co'],
  },
};

module.exports = nextConfig;
