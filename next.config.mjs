/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: "/tonconnect-manifest.json",
				destination: "/api/tonconnect-manifest"
			}
		];
	}
};

export default nextConfig;
