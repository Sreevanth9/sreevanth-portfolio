import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About',
	description:
		'Learn more about Vadlamudi Sreevanth Chowdhary — Computer Science undergraduate at Amrita Vishwa Vidyapeetham, software engineer, backend systems architect, and full-stack developer.',
	alternates: {
		canonical: 'https://sreevanth.is-a.dev/about',
	},
	openGraph: {
		title: 'About | Vadlamudi Sreevanth Chowdhary',
		description:
			'Background, technical skills, and engineering journey of Vadlamudi Sreevanth Chowdhary.',
		url: 'https://sreevanth.is-a.dev/about',
	},
};

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
