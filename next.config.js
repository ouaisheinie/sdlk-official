/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'src/styles')],
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdnimg.vivaia.com',
				port: '',
				pathname: '/VA/image/Banner/20230331_5378/**',
			},
		]
	}
}

module.exports = nextConfig
