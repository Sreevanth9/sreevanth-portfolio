import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Sreevanth Vadlamudi Chowdhary | Certificates',
	description:
		'Verified technical certifications and engineering credentials earned by Sreevanth Vadlamudi Chowdhary.',
	alternates: {
		canonical: 'https://sreevanth-portfolio.vercel.app/certificates',
	},
	openGraph: {
		title: 'Sreevanth Vadlamudi Chowdhary | Certificates',
		description:
			'Verified technical certifications and credentials of Sreevanth Vadlamudi Chowdhary.',
		url: 'https://sreevanth-portfolio.vercel.app/certificates',
	},
};

export default function CertificatesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
