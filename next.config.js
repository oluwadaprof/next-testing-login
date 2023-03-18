/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    DB_URI: 'mongosh "mongodb+srv://cluster1.xp7yscd.mongodb.net/myFirstDatabase" --apiVersion 1 --username tobi',
    NEXTAUTH_SECRET: 'oluwadaprof'
  }
};

module.exports = nextConfig;
