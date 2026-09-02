import './globals.css';

import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sreevanth-portfolio.vercel.app';

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: 'Sreevanth Vadlamudi Chowdhary | Personal Portfolio',
		template: '%s',
	},
	description:
		'Personal portfolio website of Sreevanth Vadlamudi Chowdhary (also known as Sreevanth Chowdhary Vadlamudi, Sreevanth Vadlamudi, and Sreevanth Chowdhary) — Software Engineer and Full-Stack Developer building scalable web applications, REST APIs, and AI-integrated systems.',
	keywords: [
		'Sreevanth Vadlamudi Chowdhary',
		'Sreevanth Vadlamudi',
		'Sreevanth Chowdhary',
		'Vadlamudi Sreevanth',
		'Vadlamudi Sreevanth Chowdhary',
		'Sreevanth Chowdhary Vadlamudi',
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
		'Sreevanth Vadlamudi Portfolio',
	],
	authors: [{ name: 'Sreevanth Vadlamudi Chowdhary', url: 'https://github.com/Sreevanth9' }],
	creator: 'Sreevanth Vadlamudi Chowdhary',
	publisher: 'Sreevanth Vadlamudi Chowdhary',
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
		title: 'Sreevanth Vadlamudi Chowdhary | Personal Portfolio',
		description:
			'Personal portfolio website of Sreevanth Vadlamudi Chowdhary — Software Engineer and Full-Stack Developer building scalable web applications, REST APIs, and AI-integrated systems.',
		siteName: 'Sreevanth Vadlamudi Chowdhary Portfolio',
		images: [
			{
				url: '/sreevanth.jpeg',
				width: 800,
				height: 800,
				alt: 'Sreevanth Vadlamudi Chowdhary',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Sreevanth Vadlamudi Chowdhary | Personal Portfolio',
		description:
			'Personal portfolio of Sreevanth Vadlamudi Chowdhary — Software Engineer and Full-Stack Developer.',
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
	name: 'Sreevanth Vadlamudi Chowdhary',
	alternateName: [
		'Sreevanth Vadlamudi',
		'Sreevanth Chowdhary',
		'Vadlamudi Sreevanth',
		'Sreevanth V. Chowdhary',
		'V Sreevanth Chowdhary',
		'Vadlamudi Sreevanth Chowdhary',
		'Sreevanth Chowdhary Vadlamudi',
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
		name: 'Amrita Vishwa Vidyapeetham',
	},
	alumniOf: {
		'@type': 'EducationalOrganization',
		name: 'Amrita Vishwa Vidyapeetham',
	},
	sameAs: [
		'https://github.com/Sreevanth9',
		'https://www.linkedin.com/in/sreevanth-vadlamudi',
		'https://leetcode.com/u/SreevanthV/',
	],
	knowsAbout: [
		'Software Engineering',
		'Full-Stack Development',
		'Backend Architecture',
		'Java',
		'React.js',
		'Node.js',
		'Express.js',
		'MongoDB',
		'REST APIs',
		'AWS',
		'Machine Learning',
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