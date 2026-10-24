import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || "true";
let basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').trim();

if (!basePath && isGithubActions) {
    // When deploying to https://<owner>.github.io/<repo>/, GitHub sets GITHUB_REPOSITORY="owner/repo"
    const repo = (process.env.GITHUB_REPOSITORY?.replace(/.*?\//, '') || '').trim();
    if (process.env.CUSTOM_DOMAIN !== 'true' && repo) {
        basePath = `/${repo}`;
    }
}

const nextConfig: NextConfig = {
    output: "export",
    trailingSlash: true,
    basePath,
    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
    },
    reactStrictMode: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'khahoangminh.com.vn',
                port: '',
                pathname: '/**',
            },
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
