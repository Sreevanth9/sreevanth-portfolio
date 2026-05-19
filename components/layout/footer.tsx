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
				{ title: 'Projects', href: '/projects' },
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

						<Link href="/" className="inline-block">
							<span className="text-2xl font-bold text-gradient">
								Sreevanth Portfolio
							</span>
						</Link>

						<p className="mt-4 text-sm leading-7 text-muted-foreground">
							Backend-first portfolio and project showcase
							built for modern product teams.
						</p>

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
										target="_blank"
										rel="noreferrer"
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
												rel="noreferrer"
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

				<div className="flex flex-col sm:flex-row items-center justify-between text-sm">

					<p className="text-muted-foreground text-center sm:text-left">
						© {currentYear} Sreevanth Vadlamudi.
						Built for backend systems, APIs, and scalable product engineering.
					</p>

				</div>

			</div>
		</footer>
	);
}