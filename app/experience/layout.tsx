import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Vadlamudi Sreevanth Chowdhary | Experience',
	description:
		'Professional internship and engineering experience of Vadlamudi Sreevanth Chowdhary, including India Space Lab research internship and software development projects.',
	alternates: {
		canonical: 'https://sreevanth-portfolio.vercel.app/experience',
	},
	openGraph: {
		title: 'Vadlamudi Sreevanth Chowdhary | Experience',
		description:
			'Professional internship and engineering experience of Vadlamudi Sreevanth Chowdhary.',
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
