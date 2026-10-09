import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Education',
	description:
		'Academic education and Computer Science & Engineering degree of Vadlamudi Sreevanth Chowdhary at Amrita Vishwa Vidyapeetham, Bengaluru.',
	alternates: {
		canonical: 'https://sreevanth.is-a.dev/education',
	},
	openGraph: {
		title: 'Education | Vadlamudi Sreevanth Chowdhary',
		description:
			'Academic background and education details of Vadlamudi Sreevanth Chowdhary.',
		url: 'https://sreevanth.is-a.dev/education',
	},
};

export default function EducationLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
