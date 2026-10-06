import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projects | Vadlamudi Sreevanth Chowdhary (Sreevanth Chowdary)',
	description:
		'Software engineering projects, AI platforms, and research publications by Vadlamudi Sreevanth Chowdhary (Sreevanth Chowdary, Sreevanth Chowdhary, Sreevanth Vadlamudi, Sreevanth Choudhary).',
	alternates: {
		canonical: 'https://sreevanth.is-a.dev/projects',
	},
	openGraph: {
		title: 'Projects | Vadlamudi Sreevanth Chowdhary (Sreevanth Chowdary)',
		description:
			'Software engineering projects and technical platforms built by Vadlamudi Sreevanth Chowdhary (Sreevanth Chowdary).',
		url: 'https://sreevanth.is-a.dev/projects',
	},
};

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
