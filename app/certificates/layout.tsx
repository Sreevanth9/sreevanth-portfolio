import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Sreevanth Chowdhary Vadlamudi | Certificates',
	description:
		'Verified technical certifications and engineering credentials earned by Sreevanth Chowdhary Vadlamudi.',
	alternates: {
		canonical: 'https://sreevanth-portfolio.vercel.app/certificates',
	},
	openGraph: {
		title: 'Sreevanth Chowdhary Vadlamudi | Certificates',
		description:
			'Verified technical certifications and credentials of Sreevanth Chowdhary Vadlamudi.',
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
