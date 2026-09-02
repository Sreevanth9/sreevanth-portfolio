import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Sreevanth Chowdhary Vadlamudi | Education',
	description:
		'Academic background and degree education of Sreevanth Chowdhary Vadlamudi at Amrita Vishwa Vidyapeetham, Bengaluru.',
	alternates: {
		canonical: 'https://sreevanth-portfolio.vercel.app/education',
	},
	openGraph: {
		title: 'Sreevanth Chowdhary Vadlamudi | Education',
		description:
			'Academic background and education details of Sreevanth Chowdhary Vadlamudi.',
		url: 'https://sreevanth-portfolio.vercel.app/education',
	},
};

export default function EducationLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
