import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Sreevanth Chowdhary Vadlamudi | Projects',
	description:
		'Software engineering projects built by Sreevanth Chowdhary Vadlamudi, spanning AI-assisted platforms, MERN stack web applications, and backend systems.',
	alternates: {
		canonical: 'https://sreevanth-portfolio.vercel.app/projects',
	},
	openGraph: {
		title: 'Sreevanth Chowdhary Vadlamudi | Projects',
		description:
			'Software engineering projects and technical platforms built by Sreevanth Chowdhary Vadlamudi.',
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
