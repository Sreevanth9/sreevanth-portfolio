import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Skills | Vadlamudi Sreevanth Chowdhary (Sreevanth Chowdary)',
	description:
		'Technical skills and competencies of Vadlamudi Sreevanth Chowdhary (Sreevanth Chowdary, Sreevanth Chowdhary, Sreevanth Vadlamudi, Sreevanth Choudhary) across Java, TypeScript, Python, FastAPI, Node.js, GCP, and databases.',
	alternates: {
		canonical: 'https://sreevanth.is-a.dev/skills',
	},
	openGraph: {
		title: 'Skills | Vadlamudi Sreevanth Chowdhary (Sreevanth Chowdary)',
		description:
			'Technical skills and competencies of Vadlamudi Sreevanth Chowdhary (Sreevanth Chowdary).',
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
