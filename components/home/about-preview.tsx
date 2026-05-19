'use client';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

import {
	ArrowRight,
	GraduationCap,
	Code2,
	FolderKanban,
	Server,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';

import { fadeIn } from '@/lib/motion';

export function AboutPreview() {
	return (
		<section className="py-24">

			<div className="container mx-auto max-w-7xl px-6">

				<SectionHeader
					title="About Me"
					description="
						Computer Science undergraduate focused on backend development,
						full-stack products, and scalable software systems.
					"
				/>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">

					{/* IMAGE */}

					<motion.div
						variants={fadeIn('right', 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="flex justify-center"
					>

						<div
							className="
								relative
								w-[340px]
								h-[340px]
								md:w-[420px]
								md:h-[420px]
								rounded-full
								overflow-hidden
								border border-white/10
								shadow-[0_0_60px_rgba(45,212,191,0.12)]
								bg-[#081120]
							"
						>

							<Image
								src="/sreevanth.jpeg"
								alt="Sreevanth Chowdhary Vadlamudi"
								fill
								priority
								className="object-cover"
								sizes="(max-width:768px) 100vw, 420px"
							/>

						</div>

					</motion.div>

					{/* CONTENT */}

					<motion.div
						variants={fadeIn('left', 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="space-y-8"
					>

						<div className="space-y-5">

							<h3 className="text-4xl font-extrabold tracking-tight">
								Software Developer
							</h3>

							<p className="text-lg leading-8 text-zinc-400">
								I&apos;m a Computer Science undergraduate at
								Amrita Vishwa Vidyapeetham, Bengaluru,
								with strong foundations in Java,
								MERN stack development, REST APIs,
								data structures, backend systems,
								and scalable application architecture.
							</p>

						</div>

						{/* INFO CARDS */}

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

							<div
								className="
									card-gradient
									rounded-[24px]
									p-6
									border border-white/10
								"
							>

								<div className="flex items-center gap-3 mb-3">

									<GraduationCap className="h-5 w-5 text-primary" />

									<h4 className="font-semibold text-lg">
										Education
									</h4>

								</div>

								<p className="text-zinc-400">
									B.Tech CSE
								</p>

							</div>

							<div
								className="
									card-gradient
									rounded-[24px]
									p-6
									border border-white/10
								"
							>

								<div className="flex items-center gap-3 mb-3">

									<Code2 className="h-5 w-5 text-primary" />

									<h4 className="font-semibold text-lg">
										Primary Skill
									</h4>

								</div>

								<p className="text-zinc-400">
									Java Development
								</p>

							</div>

							<div
								className="
									card-gradient
									rounded-[24px]
									p-6
									border border-white/10
								"
							>

								<div className="flex items-center gap-3 mb-3">

									<FolderKanban className="h-5 w-5 text-primary" />

									<h4 className="font-semibold text-lg">
										Projects
									</h4>

								</div>

								<p className="text-zinc-400">
									AI, MERN, Graph Algorithms
								</p>

							</div>

							<div
								className="
									card-gradient
									rounded-[24px]
									p-6
									border border-white/10
								"
							>

								<div className="flex items-center gap-3 mb-3">

									<Server className="h-5 w-5 text-primary" />

									<h4 className="font-semibold text-lg">
										Focus
									</h4>

								</div>

								<p className="text-zinc-400">
									Backend Systems
								</p>

							</div>

						</div>

						{/* BUTTON */}

						<Button
							asChild
							className="
								h-14
								px-8
								rounded-2xl
								text-base
								font-semibold
								w-fit
							"
						>

							<Link href="/about">

								Learn More

								<ArrowRight className="ml-2 h-5 w-5" />

							</Link>

						</Button>

					</motion.div>

				</div>

			</div>

		</section>
	);
}