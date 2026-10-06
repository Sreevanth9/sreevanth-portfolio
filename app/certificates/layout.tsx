import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Certifications | Vadlamudi Sreevanth Chowdhary (Sreevanth Chowdary)',
	description:
		'Verified technical certifications, credentials, and achievements earned by Vadlamudi Sreevanth Chowdhary (Sreevanth Chowdary, Sreevanth Chowdhary, Sreevanth Vadlamudi, Sreevanth Choudhary).',
	alternates: {
		canonical: 'https://sreevanth.is-a.dev/certificates',
	},
	openGraph: {
		title: 'Certifications | Vadlamudi Sreevanth Chowdhary (Sreevanth Chowdary)',
		description:
			'Verified technical certifications and credentials of Vadlamudi Sreevanth Chowdhary (Sreevanth Chowdary).',
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
