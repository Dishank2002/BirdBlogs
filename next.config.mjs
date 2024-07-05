import dotenv from 'dotenv';
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MONGODB_URL: process.env.MONGODB_URL,
        JWT_SECRET: process.env.JWT_SECRET,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        CLOUD_NAME: process.env.CLOUD_NAME,
        UPLOAD_PRESET: process.env.UPLOAD_PRESET,
        CLOUD_API_KEY: process.env.CLOUD_API_KEY,
        CLOUD_API_SECRET: process.env.CLOUD_API_SECRET,
    },
    images: {
        remotePatterns: [
            { hostname: "res.cloudinary.com", protocol: "https", port: "" }
        ]
    }
};

export default nextConfig;
