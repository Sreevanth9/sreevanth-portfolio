import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Experience | Vadlamudi Sreevanth Chowdhary (Sreevanth Chowdary)',
	description:
		'Professional software engineering and internship experience of Vadlamudi Sreevanth Chowdhary (Sreevanth Chowdary, Sreevanth Chowdhary, Sreevanth Vadlamudi), including Full Stack Developer Internship at Trajectory Minds Software Solutions and space tech development at India Space Lab.',
	alternates: {
		canonical: 'https://sreevanth.is-a.dev/experience',
	},
	openGraph: {
		title: 'Experience | Vadlamudi Sreevanth Chowdhary (Sreevanth Chowdary)',
		description:
			'Professional software engineering and internship experience of Vadlamudi Sreevanth Chowdhary (Sreevanth Chowdary).',
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
