import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projects & Publications',
	description:
		'Software engineering projects, AI platforms, and research publications by Vadlamudi Sreevanth Chowdhary.',
	alternates: {
		canonical: 'https://sreevanth.is-a.dev/projects',
	},
	openGraph: {
		title: 'Projects & Publications | Vadlamudi Sreevanth Chowdhary',
		description:
			'Software engineering projects and technical platforms built by Vadlamudi Sreevanth Chowdhary.',
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
