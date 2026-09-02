import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Sreevanth Vadlamudi Chowdhary | Education',
	description:
		'Academic background and degree education of Sreevanth Vadlamudi Chowdhary at Amrita Vishwa Vidyapeetham, Bengaluru.',
	alternates: {
		canonical: 'https://sreevanth-portfolio.vercel.app/education',
	},
	openGraph: {
		title: 'Sreevanth Vadlamudi Chowdhary | Education',
		description:
			'Academic background and education details of Sreevanth Vadlamudi Chowdhary.',
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
