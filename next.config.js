/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
    MONGO_URI: process.env.MONGO_URI,
    NODEMAILER_EMAIL: process.env.NODEMAILER_EMAIL,
    NODEMAILER_PASSWORD: process.env.NODEMAILER_PASSWORD
  },
};
module.exports = nextConfig;
