import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Sreevanth Vadlamudi Chowdhary | Experience',
	description:
		'Professional internship and engineering experience of Sreevanth Vadlamudi Chowdhary, including India Space Lab research internship and software development projects.',
	alternates: {
		canonical: 'https://sreevanth-portfolio.vercel.app/experience',
	},
	openGraph: {
		title: 'Sreevanth Vadlamudi Chowdhary | Experience',
		description:
			'Professional internship and engineering experience of Sreevanth Vadlamudi Chowdhary.',
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
