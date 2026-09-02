import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Sreevanth Vadlamudi Chowdhary | Projects',
	description:
		'Software engineering projects built by Sreevanth Vadlamudi Chowdhary, spanning AI-assisted platforms, MERN stack web applications, and backend systems.',
	alternates: {
		canonical: 'https://sreevanth-portfolio.vercel.app/projects',
	},
	openGraph: {
		title: 'Sreevanth Vadlamudi Chowdhary | Projects',
		description:
			'Software engineering projects and technical platforms built by Sreevanth Vadlamudi Chowdhary.',
		url: 'https://sreevanth-portfolio.vercel.app/projects',
	},
};

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
