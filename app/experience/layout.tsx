import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Sreevanth Chowdhary Vadlamudi | Experience',
	description:
		'Professional internship and engineering experience of Sreevanth Chowdhary Vadlamudi, including India Space Lab research internship and software development projects.',
	alternates: {
		canonical: 'https://sreevanth-portfolio.vercel.app/experience',
	},
	openGraph: {
		title: 'Sreevanth Chowdhary Vadlamudi | Experience',
		description:
			'Professional internship and engineering experience of Sreevanth Chowdhary Vadlamudi.',
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
