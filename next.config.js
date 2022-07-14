/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // https://github.com/vercel/next.js/issues/21079
  // Remove this workaround whenever the issue is fixed
  // images: {
  //  loader: 'imgix',
  //  path: '/',
  // },
  // experimental: {
  //  images: {
  //    unoptimized: true,
  //  },
  // },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
});
