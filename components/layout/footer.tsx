'use client';

import Link from 'next/link';

import {
	Linkedin,
	Github,
	Phone,
	Mail,
	MessageCircle,
} from 'lucide-react';

import { siteConfig } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function Footer() {
	const currentYear = new Date().getFullYear();

	const LeetCodeIcon = () => (
		<svg
			className="h-5 w-5"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
		>
			<path d="M16 4 8 12l8 8" />
			<path d="m14 8 4 4-4 4" />
			<path d="M9 12h10" />
		</svg>
	);

	const socialLinks = [
		{
			icon: <Phone className="h-5 w-5" />,
			href: 'tel:+917207818784',
			label: 'Phone',
		},
		{
			icon: <Mail className="h-5 w-5" />,
			href: 'mailto:vsreevanth@gmail.com',
			label: 'Email',
		},
		{
			icon: <Linkedin className="h-5 w-5" />,
			href: siteConfig.links.linkedin,
			label: 'LinkedIn',
		},
		{
			icon: <Github className="h-5 w-5" />,
			href: siteConfig.links.github,
			label: 'GitHub',
		},
		{
			icon: <LeetCodeIcon />,
			href: siteConfig.links.leetcode,
			label: 'LeetCode',
		},
		{
			icon: <MessageCircle className="h-5 w-5" />,
			href: siteConfig.links.whatsapp,
			label: 'WhatsApp',
		},
	];

	const navColumns = [
		{
			title: 'About',
			links: [
				{ title: 'About Me', href: '/about' },
				{ title: 'Education', href: '/education' },
				{ title: 'Skills', href: '/skills' },
			],
		},
		{
			title: 'Work',
			links: [
				{ title: 'Experience', href: '/experience' },
				{ title: 'Projects & Publications', href: '/projects' },
				{ title: 'Certificates', href: '/certificates' },
			],
		},
		{
			title: 'Connect',
			links: [
				{ title: 'Contact', href: '/contact' },
				{ title: 'Resume', href: '/Sreevanth_Resume.pdf' },
			],
		},
	];

	return (
		<footer className="bg-card py-12 border-t border-white/10">
			<div className="container px-4 mx-auto">

				<div className="grid grid-cols-1 md:grid-cols-4 gap-12">

					{/* LEFT */}
					<div className="md:col-span-1">

						<Link href="/" className="inline-block" aria-label="Vadlamudi Sreevanth Chowdhary Home">
							<span className="text-2xl font-bold text-gradient">
								Vadlamudi Sreevanth Chowdhary
							</span>
						</Link>

						<p className="mt-4 text-sm leading-7 text-muted-foreground">
							Software Engineer specializing in backend systems, Google Cloud infrastructure (GCP), Core Java, TypeScript, and scalable applications.
						</p>

						<div className="mt-4 space-y-1.5 text-xs text-muted-foreground">
							<p className="flex items-center gap-2">
								<Mail className="h-3.5 w-3.5 text-primary shrink-0" />
								<a href="mailto:vsreevanth@gmail.com" className="hover:text-primary transition-colors">
									vsreevanth@gmail.com
								</a>
							</p>
							<p className="flex items-center gap-2">
								<Phone className="h-3.5 w-3.5 text-primary shrink-0" />
								<a href="tel:+917207818784" className="hover:text-primary transition-colors">
									+91 72078 18784
								</a>
							</p>
							<p className="flex items-center gap-2">
								<span className="text-primary font-bold">•</span>
								<a
									href="https://maps.google.com/?q=Bengaluru,India"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-primary transition-colors"
								>
									Bengaluru, Karnataka, India
								</a>
							</p>
						</div>

						<div className="mt-6 flex flex-wrap gap-3">

							{socialLinks.map((link, index) => (
								<Button
									key={index}
									size="icon"
									variant="outline"
									asChild
									className="border-white/10 bg-white/[0.03] hover:border-primary hover:bg-white/[0.06]"
								>
									<a
										href={link.href}
										aria-label={link.label}
										target={link.href.startsWith('http') ? '_blank' : undefined}
										rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
									>
										{link.icon}
									</a>
								</Button>
							))}

						</div>

					</div>

					{/* RIGHT */}
					<div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-10">

						{navColumns.map((column, index) => (
							<div key={index}>

								<h3 className="font-semibold text-lg mb-5">
									{column.title}
								</h3>

								<ul className="space-y-4">

									{column.links.map((link, linkIndex) => (
										<li key={linkIndex}>

											<a
												href={link.href}
												target={
													link.href.startsWith('http') ||
													link.href.endsWith('.pdf')
														? '_blank'
														: undefined
												}
												rel={
													link.href.startsWith('http') ||
													link.href.endsWith('.pdf')
														? 'noopener noreferrer'
														: undefined
												}
												className="text-muted-foreground hover:text-primary text-sm transition-colors"
											>
												{link.title}
											</a>

										</li>
									))}

								</ul>

							</div>
						))}

					</div>

				</div>

				<Separator className="my-8 bg-white/10" />

				<div className="flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm gap-2">

					<p className="text-muted-foreground text-center sm:text-left">
						© {currentYear} Vadlamudi Sreevanth Chowdhary. All rights reserved.
					</p>

					<p className="text-zinc-500 text-center sm:text-right text-xs">
						Engineered for Scalable Backend Systems & Cloud Infrastructure
					</p>

				</div>

			</div>
		</footer>
	);
}