import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Vadlamudi Sreevanth Chowdhary | Experience',
	description:
		'Professional software engineering and internship experience of Vadlamudi Sreevanth Chowdhary, including Full Stack Developer Internship at Trajectory Minds Software Solutions and research software development at India Space Lab.',
	alternates: {
		canonical: 'https://sreevanth-portfolio.vercel.app/experience',
	},
	openGraph: {
		title: 'Vadlamudi Sreevanth Chowdhary | Experience',
		description:
			'Professional software engineering and internship experience of Vadlamudi Sreevanth Chowdhary at Trajectory Minds Software Solutions and India Space Lab.',
		url: 'https://sreevanth-portfolio.vercel.app/experience',
	},
};

export default function ExperienceLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
