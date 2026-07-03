import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'khahoangminh.com.vn',
                port: '',
                pathname: '/**',
            },
            // If they eventually use HTTPS, it's good practice to add it too:
            {
                protocol: 'https',
                hostname: 'khahoangminh.com.vn',
                port: '',
                pathname: '/**',
            },
        ],
        
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    },
};

export default nextConfig;
