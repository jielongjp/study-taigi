/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ["en", "zh"], // Add your supported languages here
    defaultLocale: "en", // Set your default language
    localeDetection: false, // Auto-detect user locale (optional)
  },
};
