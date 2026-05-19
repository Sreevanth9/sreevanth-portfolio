'use client';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

import {
	ArrowRight,
	Github,
	ExternalLink,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import { SectionHeader } from '@/components/ui/section-header';

import { projects } from '@/lib/constants';

import {
	staggerContainer,
	fadeInScale,
} from '@/lib/motion';

export function ProjectsPreview() {

	const previewProjects = projects.slice(0, 3);

	return (

		<section className="py-24">

			<div className="container mx-auto max-w-7xl px-6">

				<SectionHeader
					title="Featured Projects"
					description="
						Explore some of my recent engineering projects,
						full-stack applications, and technical work.
					"
				/>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="
						grid
						grid-cols-1
						md:grid-cols-2
						xl:grid-cols-3
						gap-8
						mt-16
					"
				>

					{previewProjects.map((project, index) => (

						<motion.div
							key={index}
							variants={fadeInScale(index * 0.1)}
							className="group"
						>

							<div
								className="
									card-gradient
									rounded-[28px]
									overflow-hidden
									border border-white/10
									h-full
									flex flex-col
									transition-all duration-500
									hover:-translate-y-2
									hover:border-primary/30
									hover:shadow-[0_0_40px_rgba(45,212,191,0.12)]
								"
							>

								{/* IMAGE */}

								<div className="relative h-56 overflow-hidden">

									<Image
										src={project.image}
										alt={project.title}
										fill
										className="
											object-cover
											transition-transform duration-700
											group-hover:scale-105
										"
										sizes="
											(max-width:768px) 100vw,
											(max-width:1200px) 50vw,
											33vw
										"
									/>

									<div
										className="
											absolute inset-0
											bg-gradient-to-t
											from-[#081120]
											via-transparent
											to-transparent
										"
									/>

								</div>

								{/* CONTENT */}

								<div className="flex flex-col flex-1 p-7">

									<div className="flex-1">

										<h3
											className="
												text-2xl
												font-bold
												mb-4
												tracking-tight
											"
										>
											{project.title}
										</h3>

										<p
											className="
												text-zinc-400
												leading-7
												mb-6
											"
										>
											{project.description}
										</p>

										{/* TAGS */}

										<div className="flex flex-wrap gap-2 mb-8">

											{project.tags.map((tag, tagIndex) => (

												<Badge
													key={tagIndex}
													className="
														rounded-full
														bg-white/5
														border border-white/10
														text-zinc-300
														hover:bg-primary/10
													"
												>
													{tag}
												</Badge>

											))}

										</div>

									</div>

									{/* BUTTONS */}

									<div className="flex items-center gap-3">

										{project.link && (

											<Button
												size="sm"
												asChild
												className="
													rounded-xl
													h-11
													px-5
												"
											>

												<Link
													href={project.link}
													target="_blank"
													rel="noreferrer"
												>

													<ExternalLink className="h-4 w-4 mr-2" />

													Live Demo

												</Link>

											</Button>

										)}

										{project.repo && (

											<Button
												size="sm"
												variant="outline"
												type="button"
												onClick={() =>
													window.open(
														project.repo,
														'_blank',
														'noopener,noreferrer'
													)
												}
												className="
													rounded-xl
													h-11
													px-5
													border-white/10
													bg-white/[0.03]
													hover:bg-white/[0.06]
												"
											>

												<Github className="h-4 w-4 mr-2" />

												Repository

											</Button>

										)}

									</div>

								</div>

							</div>

						</motion.div>

					))}

				</motion.div>

				{/* VIEW ALL */}

				<div className="flex justify-center mt-16">

					<Button
						asChild
						className="
							h-14
							px-8
							rounded-2xl
							text-base
							font-semibold
						"
					>

						<Link href="/projects">

							View All Projects

							<ArrowRight className="ml-2 h-5 w-5" />

						</Link>

					</Button>

				</div>

			</div>

		</section>
	);
}