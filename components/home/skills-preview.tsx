'use client';

import { motion } from 'framer-motion';

import Link from 'next/link';

import {
	ArrowRight,
	Code2,
	Server,
	Database,
} from 'lucide-react';

import {
	SiJavascript,
	SiTypescript,
	SiReact,
	SiNextdotjs,
	SiTailwindcss,
	SiNodedotjs,
	SiExpress,
	SiMongodb,
} from 'react-icons/si';

import {
	FaJava,
} from 'react-icons/fa';

import { Button } from '@/components/ui/button';

import { Card, CardContent } from '@/components/ui/card';

import { SectionHeader } from '@/components/ui/section-header';

import {
	staggerContainer,
	fadeIn,
} from '@/lib/motion';

export function SkillsPreview() {

	const skillSections = [
		{
			title: 'Programming',
			icon: Code2,
			skills: [
				{
					name: 'Java',
					icon: FaJava,
				},
				{
					name: 'JavaScript',
					icon: SiJavascript,
				},
				{
					name: 'TypeScript',
					icon: SiTypescript,
				},
			],
		},
		{
			title: 'Frontend',
			icon: Code2,
			skills: [
				{
					name: 'React.js',
					icon: SiReact,
				},
				{
					name: 'Next.js',
					icon: SiNextdotjs,
				},
				{
					name: 'Tailwind CSS',
					icon: SiTailwindcss,
				},
			],
		},
		{
			title: 'Backend',
			icon: Server,
			skills: [
				{
					name: 'Node.js',
					icon: SiNodedotjs,
				},
				{
					name: 'Express.js',
					icon: SiExpress,
				},
				{
					name: 'MongoDB',
					icon: SiMongodb,
				},
			],
		},
	];

	return (

		<section className="py-20 md:py-28">

			<div className="container px-4">

				<SectionHeader
					title="Technical Skills"
					description="
						Core technologies and development skills
						across frontend, backend, and scalable
						software systems.
					"
				/>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="
						mt-14
						grid
						grid-cols-1
						md:grid-cols-2
						lg:grid-cols-3
						gap-8
					"
				>

					{skillSections.map((section, index) => {

						const SectionIcon = section.icon;

						return (

							<motion.div
								key={section.title}
								variants={fadeIn('up', 0.15 * index)}
							>

								<Card
									className="
										h-full
										border border-white/10
										bg-[#0b1120]/80
										backdrop-blur-2xl
										transition-all duration-500
										hover:-translate-y-2
										hover:border-primary/20
										hover:shadow-[0_0_35px_rgba(45,212,191,0.12)]
									"
								>

									<CardContent className="p-8">

										<div className="flex items-center gap-4 mb-8">

											<div
												className="
													flex h-12 w-12
													items-center justify-center
													rounded-2xl
													bg-primary/10
													border border-primary/10
												"
											>

												<SectionIcon
													className="
														h-6 w-6
														text-primary
													"
												/>

											</div>

											<h3
												className="
													text-2xl
													font-bold
													text-white
												"
											>
												{section.title}
											</h3>

										</div>

										<div className="space-y-4">

											{section.skills.map((skill) => {

												const SkillIcon = skill.icon;

												return (

													<div
														key={skill.name}
														className="
															group
															flex items-center
															gap-4
															rounded-2xl
															border border-white/10
															bg-white/[0.03]
															p-4
															transition-all duration-300

															hover:border-primary/20
															hover:bg-white/[0.05]
														"
													>

														<div
															className="
																flex h-11 w-11
																items-center
																justify-center
																rounded-xl
																bg-black/20
															"
														>

															<SkillIcon
																className="
																	h-5 w-5
																	text-primary
																"
															/>

														</div>

														<div>

															<h4
																className="
																	font-semibold
																	text-white
																"
															>
																{skill.name}
															</h4>

															<p
																className="
																	text-sm
																	text-zinc-400
																"
															>
																Modern Development
															</p>

														</div>

													</div>

												);
											})}

										</div>

									</CardContent>

								</Card>

							</motion.div>

						);
					})}

				</motion.div>

				<div className="flex justify-center mt-14">

					<Button
						asChild
						className="
							h-12
							rounded-xl
							px-7
							font-semibold
						"
					>

						<Link href="/skills">

							View All Skills

							<ArrowRight className="ml-2 h-4 w-4" />

						</Link>

					</Button>

				</div>

			</div>

		</section>

	);
}