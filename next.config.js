/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: "images.clerk.dev" }],
    },
};

module.exports = nextConfig;
