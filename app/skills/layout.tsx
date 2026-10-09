import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Skills',
	description:
		'Technical skills and competencies of Vadlamudi Sreevanth Chowdhary across Core Java, TypeScript, Python, FastAPI, Node.js, GCP, and modern databases.',
	alternates: {
		canonical: 'https://sreevanth.is-a.dev/skills',
	},
	openGraph: {
		title: 'Skills | Vadlamudi Sreevanth Chowdhary',
		description:
			'Technical skills and competencies of Vadlamudi Sreevanth Chowdhary.',
		url: 'https://sreevanth.is-a.dev/skills',
	},
};

export default function SkillsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
