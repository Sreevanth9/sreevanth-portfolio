import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About Sreevanth Vadlamudi Chowdhary',
	description:
		'Learn more about Sreevanth Vadlamudi Chowdhary (also known as Sreevanth Vadlamudi and Sreevanth Chowdhary), a software engineer and computer science undergraduate.',
	alternates: {
		canonical: 'https://sreevanth-portfolio.vercel.app/about',
	},
	openGraph: {
		title: 'About Sreevanth Vadlamudi Chowdhary',
		description:
			'Background, education, and technical journey of Sreevanth Vadlamudi Chowdhary.',
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
