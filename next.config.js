/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    _CHROMATIC_PROJECT_TOKEN: process.env.CHROMATIC_PROJECT_TOKEN,
    _STORYBOOK_PORT: process.env.STORYBOOK_PORT,
  },
};

module.exports = nextConfig;
