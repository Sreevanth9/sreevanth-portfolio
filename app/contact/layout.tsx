import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact Sreevanth Chowdhary Vadlamudi',
	description:
		'Get in touch with Sreevanth Chowdhary Vadlamudi for software engineering opportunities, technical collaborations, or project inquiries.',
	alternates: {
		canonical: 'https://sreevanth-portfolio.vercel.app/contact',
	},
	openGraph: {
		title: 'Contact Sreevanth Chowdhary Vadlamudi',
		description:
			'Connect with Sreevanth Chowdhary Vadlamudi for software engineering opportunities and collaborations.',
		url: 'https://sreevanth-portfolio.vercel.app/contact',
	},
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
