import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sreevanth-portfolio.vercel.app';
	const routes = [
		'',
		'/about',
		'/projects',
		'/skills',
		'/experience',
		'/education',
		'/certificates',
		'/contact',
	];

	return routes.map((route) => ({
		url: route === '' ? `${baseUrl}/` : `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: route === '' ? 1.0 : 0.8,
	}));
}
