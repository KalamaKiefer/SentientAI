/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: "images.clerk.dev" },
            { hostname: "oaidalleapiprodscus.blob.core.windows.net" },
        ],
    },
};

module.exports = nextConfig;
