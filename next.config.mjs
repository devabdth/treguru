/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx'],
    output: "standalone",
    images: {
        remotePatterns: [

            {
                protocol: "http",
                hostname: "localhost",
            },
        ],
    },
}

export default nextConfig
