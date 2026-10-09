import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact',
	description:
		'Get in touch with Vadlamudi Sreevanth Chowdhary for software engineering roles, backend systems design, and technical collaborations.',
	alternates: {
		canonical: 'https://sreevanth.is-a.dev/contact',
	},
	openGraph: {
		title: 'Contact | Vadlamudi Sreevanth Chowdhary',
		description:
			'Connect with Vadlamudi Sreevanth Chowdhary for software engineering opportunities and collaborations.',
		url: 'https://sreevanth.is-a.dev/contact',
	},
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
