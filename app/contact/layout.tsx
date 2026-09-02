import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact Sreevanth Vadlamudi Chowdhary',
	description:
		'Get in touch with Sreevanth Vadlamudi Chowdhary for software engineering opportunities, technical collaborations, or project inquiries.',
	alternates: {
		canonical: 'https://sreevanth-portfolio.vercel.app/contact',
	},
	openGraph: {
		title: 'Contact Sreevanth Vadlamudi Chowdhary',
		description:
			'Connect with Sreevanth Vadlamudi Chowdhary for software engineering opportunities and collaborations.',
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
