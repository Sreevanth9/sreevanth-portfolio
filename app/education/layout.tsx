import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Education | Vadlamudi Sreevanth Chowdhary (Sreevanth Chowdary)',
	description:
		'Academic background and education of Vadlamudi Sreevanth Chowdhary (Sreevanth Chowdary, Sreevanth Chowdhary, Sreevanth Vadlamudi) at Amrita Vishwa Vidyapeetham, Bengaluru.',
	alternates: {
		canonical: 'https://sreevanth-portfolio.vercel.app/education',
	},
	openGraph: {
		title: 'Education | Vadlamudi Sreevanth Chowdhary (Sreevanth Chowdary)',
		description:
			'Academic background and education details of Vadlamudi Sreevanth Chowdhary (Sreevanth Chowdary).',
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
