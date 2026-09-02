import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Sreevanth Chowdhary Vadlamudi | Skills',
	description:
		'Technical skills and competencies of Sreevanth Chowdhary Vadlamudi across programming languages, backend engineering, frontend frameworks, databases, and AI systems.',
	alternates: {
		canonical: 'https://sreevanth-portfolio.vercel.app/skills',
	},
	openGraph: {
		title: 'Sreevanth Chowdhary Vadlamudi | Skills',
		description:
			'Technical skills and competencies of Sreevanth Chowdhary Vadlamudi.',
		url: 'https://sreevanth-portfolio.vercel.app/skills',
	},
};

export default function SkillsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
