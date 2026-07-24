import './globals.css';

import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sreevanth-portfolio.vercel.app';

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: 'Sreevanth Chowdhary Vadlamudi | Software Engineer & Full-Stack Developer',
		template: '%s | Sreevanth Chowdhary Vadlamudi',
	},
	description:
		'Personal portfolio website of Sreevanth Chowdhary Vadlamudi - Software Engineer, Backend Developer, and MERN Stack Developer building scalable web applications, REST APIs, and AI-integrated systems.',
	keywords: [
		'Sreevanth Chowdhary Vadlamudi',
		'Sreevanth Vadlamudi',
		'Sreevanth',
		'Vadlamudi Sreevanth',
		'Sreevanth Portfolio',
		'Sreevanth Vadlamudi Portfolio',
		'Software Engineer',
		'Full Stack Developer',
		'Backend Developer',
		'Java Developer',
		'MERN Stack Developer',
		'Amrita Vishwa Vidyapeetham',
		'Bengaluru Software Engineer',
	],
	authors: [{ name: 'Sreevanth Chowdhary Vadlamudi', url: 'https://github.com/Sreevanth9' }],
	creator: 'Sreevanth Chowdhary Vadlamudi',
	publisher: 'Sreevanth Chowdhary Vadlamudi',
	alternates: {
		canonical: '/',
	},
	verification: {
		google: 'googlec5c3abd44d1f41c7',
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
		title: 'Sreevanth Chowdhary Vadlamudi | Software Engineer & Full-Stack Developer',
		description:
			'Personal portfolio of Sreevanth Chowdhary Vadlamudi - Software Engineer, Backend Developer, and MERN Stack Developer building scalable web applications and AI systems.',
		siteName: 'Sreevanth Chowdhary Vadlamudi Portfolio',
		images: [
			{
				url: '/sreevanth.jpeg',
				width: 800,
				height: 800,
				alt: 'Sreevanth Chowdhary Vadlamudi',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Sreevanth Chowdhary Vadlamudi | Software Engineer Portfolio',
		description:
			'Personal portfolio of Sreevanth Chowdhary Vadlamudi - Software Engineer and Full-Stack Developer.',
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
	name: 'Sreevanth Chowdhary Vadlamudi',
	alternateName: ['Sreevanth Vadlamudi', 'Sreevanth', 'Vadlamudi Sreevanth'],
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