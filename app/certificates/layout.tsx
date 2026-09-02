import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Vadlamudi Sreevanth Chowdhary | Certificates',
	description:
		'Verified technical certifications and engineering credentials earned by Vadlamudi Sreevanth Chowdhary.',
	alternates: {
		canonical: 'https://sreevanth-portfolio.vercel.app/certificates',
	},
	openGraph: {
		title: 'Vadlamudi Sreevanth Chowdhary | Certificates',
		description:
			'Verified technical certifications and credentials of Vadlamudi Sreevanth Chowdhary.',
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
