/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com', 'a0.muscache.com'],
  },
  env: {
    MAPBOX_KEY: process.env.MAPBOX_KEY,
    MAPBOX_STYLE: process.env.MAPBOX_STYLE,
  },
};

module.exports = nextConfig;
