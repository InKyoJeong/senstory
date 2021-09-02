const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withImages = require('next-images');

module.exports = withBundleAnalyzer(
  withImages({
    compress: true,
    webpack: (config) => {
      const prod = process.env.NODE_ENV === 'production';
      return {
        ...config,
        mode: prod ? 'production' : 'development',
        devtool: prod ? 'hidden-source-map' : 'eval-source-map',
        plugins: [...config.plugins],
      };
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  }),
);
