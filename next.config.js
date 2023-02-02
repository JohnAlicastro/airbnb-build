/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com', 'a0.muscache.com'],
  },
  // env: {
  //   mapbox_key: 'pk.eyJ1IjoiamFsaWNhc3RybyIsImEiOiJjbGRub29maDUwZnVyM29vNDA5c2c2bm1wIn0.5tGSQ3aS-Pkg0KHPMT6ZkQ',
  // },
};

module.exports = nextConfig;
