/** @type {import('next').NextConfig} */

if (
	typeof globalThis.localStorage === 'undefined' ||
	typeof globalThis.localStorage.getItem !== 'function'
) {
	const storage = new Map();

	globalThis.localStorage = {
		getItem: (key) => storage.get(key) ?? null,
		setItem: (key, value) => storage.set(key, String(value)),
		removeItem: (key) => storage.delete(key),
		clear: () => storage.clear(),
		key: (index) => Array.from(storage.keys())[index] ?? null,
		get length() {
			return storage.size;
		},
	};
}

const nextConfig = {
	output: 'export',

	eslint: {
		ignoreDuringBuilds: true,
	},

	devIndicators: false,

	images: {
		unoptimized: true,

		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
		],
	},

	webpack: (config) => {
		config.cache = false;
		return config;
	},
};

module.exports = nextConfig;