import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Vadlamudi Sreevanth Chowdhary | Education',
	description:
		'Academic background and degree education of Vadlamudi Sreevanth Chowdhary at Amrita Vishwa Vidyapeetham, Bengaluru.',
	alternates: {
		canonical: 'https://sreevanth-portfolio.vercel.app/education',
	},
	openGraph: {
		title: 'Vadlamudi Sreevanth Chowdhary | Education',
		description:
			'Academic background and education details of Vadlamudi Sreevanth Chowdhary.',
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
