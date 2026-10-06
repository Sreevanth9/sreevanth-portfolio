import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About Vadlamudi Sreevanth Chowdhary | Sreevanth Chowdary',
	description:
		'Vadlamudi Sreevanth Chowdhary (also known as Sreevanth Chowdary, Sreevanth Chowdhary, Sreevanth Vadlamudi, Vadlamudi Sreevanth, Sreevanth Choudhary) — Software Engineer and Computer Science Undergraduate.',
	alternates: {
		canonical: 'https://sreevanth.is-a.dev/about',
	},
	openGraph: {
		title: 'About Vadlamudi Sreevanth Chowdhary | Sreevanth Chowdary',
		description:
			'Background, technical skills, and experience of Vadlamudi Sreevanth Chowdhary (Sreevanth Chowdary).',
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
