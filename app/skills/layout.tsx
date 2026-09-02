import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Sreevanth Vadlamudi Chowdhary | Skills',
	description:
		'Technical skills and competencies of Sreevanth Vadlamudi Chowdhary across programming languages, backend engineering, frontend frameworks, databases, and AI systems.',
	alternates: {
		canonical: 'https://sreevanth-portfolio.vercel.app/skills',
	},
	openGraph: {
		title: 'Sreevanth Vadlamudi Chowdhary | Skills',
		description:
			'Technical skills and competencies of Sreevanth Vadlamudi Chowdhary.',
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
