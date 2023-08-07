/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/placeholder-avatars/*",
      },
    ],
    loader: "custom",
    loaderFile: "./src/app/utils/unsplashLoader.ts",
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
