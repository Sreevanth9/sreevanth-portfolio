import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About Vadlamudi Sreevanth Chowdhary',
	description:
		'Learn more about Vadlamudi Sreevanth Chowdhary (also known as Sreevanth Vadlamudi and Sreevanth Chowdhary), a software engineer and computer science undergraduate.',
	alternates: {
		canonical: 'https://sreevanth-portfolio.vercel.app/about',
	},
	openGraph: {
		title: 'About Vadlamudi Sreevanth Chowdhary',
		description:
			'Background, education, and technical journey of Vadlamudi Sreevanth Chowdhary.',
		url: 'https://sreevanth-portfolio.vercel.app/about',
	},
};

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
