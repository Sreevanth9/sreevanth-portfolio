import './globals.css';

import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sreevanth-portfolio.vercel.app';

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: 'Vadlamudi Sreevanth Chowdhary | Personal Portfolio',
		template: '%s',
	},
	description:
		'Personal portfolio website of Vadlamudi Sreevanth Chowdhary (also known as Sreevanth Vadlamudi Chowdhary, Sreevanth Vadlamudi, and Sreevanth Chowdhary) — Software Engineer and Full-Stack Developer building scalable web applications, REST APIs, and AI-integrated systems.',
	keywords: [
		'Vadlamudi Sreevanth Chowdhary',
		'Sreevanth Vadlamudi Chowdhary',
		'Sreevanth Vadlamudi',
		'Sreevanth Chowdhary',
		'Vadlamudi Sreevanth',
		'Vadlamudi Sreevanth Chowdhary',
		'Sreevanth V',
		'Sreevanth V.',
		'V Sreevanth',
		'V. Sreevanth',
		'Sreevanth V Chowdhary',
		'Sreevanth V. Chowdhary',
		'V Sreevanth Chowdhary',
		'V. Sreevanth Chowdhary',
		'Sreevanth',
		'Sreevanth Portfolio',
		'Vadlamudi Sreevanth Chowdhary Portfolio',
	],
	authors: [{ name: 'Vadlamudi Sreevanth Chowdhary', url: 'https://github.com/Sreevanth9' }],
	creator: 'Vadlamudi Sreevanth Chowdhary',
	publisher: 'Vadlamudi Sreevanth Chowdhary',
	alternates: {
		canonical: 'https://sreevanth-portfolio.vercel.app/',
	},
	verification: {
		google: '_BhEdTcBn39z3tcXPOkRer5CFuNEop7qMFbfJyyq12w',
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
		title: 'Vadlamudi Sreevanth Chowdhary | Personal Portfolio',
		description:
			'Personal portfolio website of Vadlamudi Sreevanth Chowdhary — Software Engineer and Full-Stack Developer building scalable web applications, REST APIs, and AI-integrated systems.',
		siteName: 'Vadlamudi Sreevanth Chowdhary Portfolio',
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
		title: 'Vadlamudi Sreevanth Chowdhary | Personal Portfolio',
		description:
			'Personal portfolio of Vadlamudi Sreevanth Chowdhary — Software Engineer and Full-Stack Developer.',
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
		'Sreevanth Vadlamudi Chowdhary',
		'Sreevanth Vadlamudi',
		'Sreevanth Chowdhary',
		'Vadlamudi Sreevanth',
		'Sreevanth V. Chowdhary',
		'V Sreevanth Chowdhary',
		'Vadlamudi Sreevanth Chowdhary',
		'Sreevanth V',
		'Sreevanth V.',
		'V Sreevanth',
		'V. Sreevanth',
		'Sreevanth',
		'Sreevanth V Chowdhary',
		'V. Sreevanth Chowdhary',
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