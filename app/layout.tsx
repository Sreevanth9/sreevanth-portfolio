import './globals.css';

import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sreevanth.is-a.dev';

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: 'Vadlamudi Sreevanth Chowdhary | Software Engineer',
		template: '%s | Vadlamudi Sreevanth Chowdhary',
	},
	description:
		'Vadlamudi Sreevanth Chowdhary is a Software Engineer and Full-Stack Developer specializing in backend systems architecture, Google Cloud Platform (GCP), Core Java, TypeScript, and scalable cloud-native applications.',
	keywords: [
		'Vadlamudi Sreevanth Chowdhary',
		'Vadlamudi Sreevanth Chowdary',
		'Vadlamudi Sreevanth Choudhary',
		'Vadlamudi Sreevanth Choudary',
		'Sreevanth Chowdhary',
		'Sreevanth Chowdary',
		'Sreevanth Choudhary',
		'Sreevanth Choudary',
		'Sreevanth Vadlamudi',
		'Vadlamudi Sreevanth',
		'Sreevanth Vadlamudi Chowdary',
		'Sreevanth Vadlamudi Chowdhary',
		'Sreevanth V',
		'Sreevanth V.',
		'V Sreevanth',
		'V. Sreevanth',
		'Sreevanth V Chowdary',
		'Sreevanth V Chowdhary',
		'V Sreevanth Chowdary',
		'V Sreevanth Chowdhary',
		'Srivanth Chowdary',
		'Srivanth Chowdhary',
		'Srivanth Vadlamudi',
		'Sravanth Chowdary',
		'Sravanth Chowdhary',
		'Sravanth Vadlamudi',
		'Chowdary Sreevanth',
		'Chowdhary Sreevanth',
		'sreevanth chowdary',
		'sreevanth chowdhary',
		'sreevanth choudhary',
		'sreevanth vadlamudi',
		'vadlamudi sreevanth',
		'sreevanth v',
		'sreevanth',
		'Sreevanth',
	],
	authors: [{ name: 'Vadlamudi Sreevanth Chowdhary', url: 'https://github.com/Sreevanth9' }],
	creator: 'Vadlamudi Sreevanth Chowdhary',
	publisher: 'Vadlamudi Sreevanth Chowdhary',
	alternates: {
		canonical: 'https://sreevanth.is-a.dev/',
	},
	verification: {
		google: [
			'dLSPQgvoYpTRe9zpR_aRJG6ExxTAZ6SoOyiV9MqFmYU',
			'_BhEdTcBn39z3tcXPOkRer5CFuNEop7qMFbfJyyq12w',
			'c5c3abd44d1f41c7',
		],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: siteUrl,
		title: 'Vadlamudi Sreevanth Chowdhary | Software Engineer',
		description:
			'Vadlamudi Sreevanth Chowdhary is a Software Engineer and Full-Stack Developer specializing in backend systems architecture, Google Cloud Platform (GCP), Core Java, and TypeScript.',
		siteName: 'Vadlamudi Sreevanth Chowdhary',
		images: [
			{
				url: '/sreevanth.jpeg',
				width: 800,
				height: 800,
				alt: 'Vadlamudi Sreevanth Chowdhary',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Vadlamudi Sreevanth Chowdhary | Software Engineer',
		description:
			'Vadlamudi Sreevanth Chowdhary is a Software Engineer and Full-Stack Developer specializing in backend architecture, Google Cloud (GCP), and modern web platforms.',
		images: ['/sreevanth.jpeg'],
	},
	icons: {
		icon: [
			{ url: '/favicon.ico' },
			{ url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
			{ url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
			{ url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
		],
		shortcut: '/favicon.ico',
		apple: '/favicon-192x192.png',
	},
};

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Vadlamudi Sreevanth Chowdhary',
	alternateName: [
		'Sreevanth Chowdary',
		'Vadlamudi Sreevanth Chowdary',
		'Sreevanth Chowdhary',
		'Vadlamudi Sreevanth Chowdhary',
		'Sreevanth Vadlamudi',
		'Vadlamudi Sreevanth',
		'Sreevanth Vadlamudi Chowdary',
		'Sreevanth Vadlamudi Chowdhary',
		'Sreevanth Choudhary',
		'Vadlamudi Sreevanth Choudhary',
		'Sreevanth Choudary',
		'Vadlamudi Sreevanth Choudary',
		'Sreevanth V',
		'Sreevanth V.',
		'V Sreevanth',
		'V. Sreevanth',
		'Sreevanth V Chowdary',
		'Sreevanth V. Chowdary',
		'Sreevanth V Chowdhary',
		'Sreevanth V. Chowdhary',
		'V Sreevanth Chowdary',
		'V. Sreevanth Chowdary',
		'V Sreevanth Chowdhary',
		'V. Sreevanth Chowdhary',
		'Srivanth Chowdary',
		'Srivanth Chowdhary',
		'Srivanth Vadlamudi',
		'Sravanth Chowdary',
		'Sravanth Chowdhary',
		'Sravanth Vadlamudi',
		'Chowdary Sreevanth',
		'Chowdhary Sreevanth',
		'Sreevanth',
	],
	url: siteUrl,
	image: `${siteUrl}/sreevanth.jpeg`,
	jobTitle: 'Software Engineer & Full-Stack Developer',
	worksFor: {
		'@type': 'Organization',
		name: 'Trajectory Minds Software Solutions',
	},
	alumniOf: {
		'@type': 'EducationalOrganization',
		name: 'Amrita Vishwa Vidyapeetham',
	},
	sameAs: [
		'https://github.com/Sreevanth9',
		'https://www.linkedin.com/in/sreevanth-vadlamudi',
		'https://leetcode.com/u/SreevanthV/',
		'https://wa.me/917207818784',
	],
	knowsAbout: [
		'Software Engineering',
		'Backend Architecture',
		'Google Cloud Platform (GCP)',
		'Cloud IAM',
		'Cloud Run',
		'Cloud Build',
		'Java',
		'TypeScript',
		'JavaScript',
		'Python',
		'FastAPI',
		'Node.js',
		'Express.js',
		'React.js',
		'Next.js',
		'MongoDB',
		'Firebase Firestore',
		'REST APIs',
		'Docker',
		'CI/CD Pipelines',
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body className="font-sans">
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem={false}
				>
					<div className="relative min-h-screen flex flex-col">
						<Navbar />
						<main className="flex-grow pt-16">
							{children}
						</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}