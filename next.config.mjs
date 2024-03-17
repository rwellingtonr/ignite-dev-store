/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'github.com',
				port: '',
				pathname: '/rwellingtonr**',
			},
		],
	},
}

export default nextConfig
