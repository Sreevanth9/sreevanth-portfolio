import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Certifications',
	description:
		'Verified technical certifications, credentials, and achievements earned by Vadlamudi Sreevanth Chowdhary across Oracle, AWS, Anthropic, GitHub, and Full-Stack Engineering.',
	alternates: {
		canonical: 'https://sreevanth.is-a.dev/certificates',
	},
	openGraph: {
		title: 'Certifications | Vadlamudi Sreevanth Chowdhary',
		description:
			'Verified technical certifications and credentials of Vadlamudi Sreevanth Chowdhary.',
		url: 'https://sreevanth.is-a.dev/certificates',
	},
};

export default function CertificatesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
