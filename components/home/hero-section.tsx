'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, FileDown, Github, Linkedin, Mail } from 'lucide-react';
import * as THREE from 'three';

import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

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

export function HeroSection() {
	const [vantaEffect, setVantaEffect] = useState<any>(null);
	const vantaRef = useRef<HTMLDivElement>(null);
	const stats = [
		{
			icon: <Github className="h-5 w-5" />,
			value: '10+',
			label: 'GitHub Projects',
			href: '/projects',
		},
		{
			icon: <LeetCodeIcon />,
			value: '100+',
			label: 'Problems Solved',
			href: siteConfig.links.leetcode,
		},
		{
			icon: <Linkedin className="h-5 w-5" />,
			value: '1000+',
			label: 'LinkedIn Followers',
			href: siteConfig.links.linkedin,
		},
		{
			icon: <Mail className="h-5 w-5" />,
			value: '24/7',
			label: 'Contact',
			href: siteConfig.links.email,
		},
	];

	useEffect(() => {
		let isMounted = true;

		if (!vantaEffect && vantaRef.current) {
			import('vanta/dist/vanta.net.min').then((module) => {
				if (!isMounted || !vantaRef.current) return;

				const NET = module.default;

				setVantaEffect(
					NET({
						el: vantaRef.current,
						THREE: THREE,
						mouseControls: true,
						touchControls: true,
						gyroControls: false,
						minHeight: 200.00,
						minWidth: 200.00,
						scale: 0.8,
						scaleMobile: 0.8,
						color: 0xff3f81,
						backgroundColor: 0x23153c,
						points: 10.00,
						maxDistance: 15.00,
						spacing: 20.00,
						showDots: false,
					})
				);
			});
		}
		return () => {
			isMounted = false;
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);

	return (
		<section className="relative overflow-hidden">
			{/* Vanta.js Background */}
			<div ref={vantaRef} className="absolute inset-0 z-0 opacity-60" />

			{/* Content */}
			<div className="container relative z-10 px-4 py-20 md:py-32 flex flex-col items-center justify-center min-h-[90vh]">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="max-w-3xl mx-auto text-center"
				>
					<motion.h1
						variants={fadeIn('up', 0.2)}
						className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
					>
						<span className="text-gradient">Sreevanth Chowdhary Vadlamudi</span>
					</motion.h1>

					<motion.div
						variants={fadeIn('up', 0.4)}
						className="mt-10 flex flex-wrap gap-4 justify-center"
					>
						<Button size="lg" asChild>
							<Link href="/projects">
								View Projects <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
						<Button size="lg" variant="outline" asChild>
							<a
								href="/Sreevanth_Resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								Download CV
								<FileDown className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</motion.div>

					<motion.div
						variants={fadeIn('up', 0.6)}
						className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4"
					>
						{stats.map((stat, index) => (
							<a
								key={stat.label}
								href={stat.href}
								target={stat.href.startsWith('http') ? '_blank' : undefined}
								rel={stat.href.startsWith('http') ? 'noopener noreferrer' : undefined}
								className="group rounded-lg border border-border/60 bg-background/30 px-4 py-4 text-center backdrop-blur-sm transition-colors hover:border-primary/70 hover:bg-background/50"
							>
								<div className="mx-auto mb-3 flex justify-center text-muted-foreground transition-colors group-hover:text-primary">
									{stat.icon}
								</div>
								<p className={`${index === 0 ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'} font-bold text-foreground`}>
									{stat.value}
								</p>
								<p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
							</a>
						))}
					</motion.div>
				</motion.div>
			</div>

			{/* Bottom gradient */}
			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
		</section>
	);
}
