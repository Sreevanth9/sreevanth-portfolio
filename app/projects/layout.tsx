import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Vadlamudi Sreevanth Chowdhary | Projects',
	description:
		'Software engineering projects built by Vadlamudi Sreevanth Chowdhary, spanning AI-assisted platforms, MERN stack web applications, and backend systems.',
	alternates: {
		canonical: 'https://sreevanth-portfolio.vercel.app/projects',
	},
	openGraph: {
		title: 'Vadlamudi Sreevanth Chowdhary | Projects',
		description:
			'Software engineering projects and technical platforms built by Vadlamudi Sreevanth Chowdhary.',
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
