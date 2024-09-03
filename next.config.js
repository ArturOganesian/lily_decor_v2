/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
  },
};
module.exports = nextConfig;
