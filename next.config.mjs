/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "localhost:3000", "maps.googleapis.com"],
  },
  reactStrictMode: true,
};

export default nextConfig;
