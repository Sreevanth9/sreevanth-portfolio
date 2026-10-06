import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact Vadlamudi Sreevanth Chowdhary | Sreevanth Chowdary',
	description:
		'Contact Vadlamudi Sreevanth Chowdhary (also known as Sreevanth Chowdary, Sreevanth Chowdhary, Sreevanth Vadlamudi, Sreevanth Choudhary) for software engineering roles, backend systems architecture, and technical inquiries.',
	alternates: {
		canonical: 'https://sreevanth.is-a.dev/contact',
	},
	openGraph: {
		title: 'Contact Vadlamudi Sreevanth Chowdhary | Sreevanth Chowdary',
		description:
			'Connect with Vadlamudi Sreevanth Chowdhary (Sreevanth Chowdary) for software engineering opportunities and collaborations.',
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
