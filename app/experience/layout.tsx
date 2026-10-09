import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Experience',
	description:
		'Professional software engineering and internship experience of Vadlamudi Sreevanth Chowdhary, including Full Stack Developer Internship at Trajectory Minds Software Solutions and aerospace software development at India Space Lab.',
	alternates: {
		canonical: 'https://sreevanth.is-a.dev/experience',
	},
	openGraph: {
		title: 'Experience | Vadlamudi Sreevanth Chowdhary',
		description:
			'Professional software engineering and internship experience of Vadlamudi Sreevanth Chowdhary.',
		url: 'https://sreevanth.is-a.dev/experience',
	},
};

export default function ExperienceLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
