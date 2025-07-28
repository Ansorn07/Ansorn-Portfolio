/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader",
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: "/email",
        destination: "mailto:babjiansorn77@gmail.com",
        permanent: true,
      },
      {
        source: "/directresume",
        destination: "/docs/MyResume.pdf",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      { source: "/about", destination: "/" },
      { source: "/contact", destination: "/" },
      { source: "/projects", destination: "/" },
      { source: "/experience", destination: "/" },
      { source: "/skills", destination: "/" },
      { source: "/github", destination: "https://github.com/Ansorn07" },
      { source: "/linkedin", destination: "https://www.linkedin.com/in/a-s-babji-rao/" },
    ];
  },
  env: {
    service_key: process.env.EMAILJS_SERVICE_ID,
    template_key: process.env.EMAILJS_TEMPLATE_ID,
    user_key: process.env.EMAILJS_PUBLIC_KEY,
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
