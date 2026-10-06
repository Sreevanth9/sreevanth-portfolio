import './globals.css';

import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sreevanth.is-a.dev';

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: 'Vadlamudi Sreevanth Chowdhary | Sreevanth Chowdary',
		template: '%s',
	},
	description:
		'Vadlamudi Sreevanth Chowdhary (also searched as Sreevanth Chowdary, Sreevanth Chowdhary, Sreevanth Vadlamudi, Vadlamudi Sreevanth, Sreevanth Choudhary, Sravanth Chowdary, Srivanth Chowdary, Sreevanth V, V Sreevanth Chowdhary, V Sreevanth Chowdary) — Software Engineer & Full-Stack Developer specializing in backend architecture, Google Cloud (GCP), Core Java, TypeScript, and modern scalable software systems.',
	keywords: [
		'Vadlamudi Sreevanth Chowdhary',
		'Vadlamudi Sreevanth Chowdary',
		'Vadlamudi Sreevanth Choudhary',
		'Vadlamudi Sreevanth Choudary',
		'Sreevanth Chowdary',
		'Sreevanth Chowdhary',
		'Sreevanth Choudhary',
		'Sreevanth Choudary',
		'Sreevanth Vadlamudi Chowdary',
		'Sreevanth Vadlamudi Chowdhary',
		'Sreevanth Vadlamudi',
		'Vadlamudi Sreevanth',
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
		title: 'Vadlamudi Sreevanth Chowdhary | Sreevanth Chowdary',
		description:
			'Vadlamudi Sreevanth Chowdhary (Sreevanth Chowdary, Sreevanth Chowdhary, Sreevanth Vadlamudi, Vadlamudi Sreevanth, Sreevanth Choudhary) — Software Engineer & Full-Stack Developer specializing in backend systems and cloud platforms.',
		siteName: 'Vadlamudi Sreevanth Chowdhary | Sreevanth Chowdary',
		images: [
			{
				url: '/sreevanth.jpeg',
				width: 800,
				height: 800,
				alt: 'Vadlamudi Sreevanth Chowdhary (Sreevanth Chowdary)',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Vadlamudi Sreevanth Chowdhary | Sreevanth Chowdary',
		description:
			'Vadlamudi Sreevanth Chowdhary (Sreevanth Chowdary, Sreevanth Chowdhary, Sreevanth Vadlamudi) — Software Engineer & Full-Stack Developer.',
		images: ['/sreevanth.jpeg'],
	},
	icons: {
		icon: '/icon.png',
		shortcut: '/icon.png',
		apple: '/icon.png',
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