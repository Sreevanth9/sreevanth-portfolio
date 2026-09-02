'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
	ExternalLink,
	Github,
	FileText,
	Award,
	BookOpen,
	MapPin,
	Calendar,
	Sparkles,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
	selectedProjects,
	researchProjects,
	publications,
	type Project,
} from '@/lib/constants';
import { staggerContainer, fadeInScale } from '@/lib/motion';

export default function ProjectsPage() {
	const renderProjectButtons = (project: Project) => (
		<div className="flex flex-wrap items-center gap-2.5 w-full pt-2">
			{project.link && (
				<Button
					size="sm"
					asChild
					className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-md shadow-primary/20"
				>
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`Visit live project for ${project.title}`}
					>
						<ExternalLink className="h-4 w-4 mr-1.5 shrink-0" />
						{project.linkText || 'Visit Project'}
					</a>
				</Button>
			)}

			{project.repo && (
				<Button
					size="sm"
					variant="outline"
					asChild
					className="border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-white"
				>
					<a
						href={project.repo}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`View GitHub repository for ${project.title}`}
					>
						<Github className="h-4 w-4 mr-1.5 shrink-0" />
						GitHub
					</a>
				</Button>
			)}

			{project.reportUrl && (
				<Button
					size="sm"
					variant="outline"
					asChild
					className="border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-white"
				>
					<a
						href={project.reportUrl}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`View project report for ${project.title}`}
					>
						<FileText className="h-4 w-4 mr-1.5 shrink-0 text-primary" />
						{project.reportText || 'View Report'}
					</a>
				</Button>
			)}

			{project.certificateUrl && (
				<Button
					size="sm"
					variant="outline"
					asChild
					className="border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-white"
				>
					<a
						href={project.certificateUrl}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`View certificate for ${project.title}`}
					>
						<Award className="h-4 w-4 mr-1.5 shrink-0 text-amber-400" />
						{project.certificateText || 'View Certificate'}
					</a>
				</Button>
			)}
		</div>
	);

	return (
		<div className="py-16 md:py-24">
			<div className="container px-4 sm:px-6">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
				>
					{/* PAGE HEADER */}
					<motion.div
						variants={fadeInScale(0.1)}
						className="text-center mb-16 max-w-3xl mx-auto"
					>
						<Badge
							variant="outline"
							className="border-primary/30 text-primary px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider"
						>
							Portfolio Showcase
						</Badge>
						<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
							Projects & Research
						</h1>
						<p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
							A curated collection of full-stack software applications, backend architectures,
							academic research systems, and peer-reviewed conference publications.
						</p>
					</motion.div>

					{/* ====================================================== */}
					{/* SECTION 1: SELECTED PROJECTS                           */}
					{/* ====================================================== */}
					<section className="mb-24">
						<div className="mb-10">
							<div className="flex items-center gap-3 mb-2">
								<div className="h-2 w-2 rounded-full bg-primary" />
								<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
									Selected Projects
								</h2>
							</div>
							<p className="text-muted-foreground text-sm sm:text-base">
								Full-stack software applications, cloud systems, and core software engineering platforms.
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
							{selectedProjects.map((project, index) => (
								<motion.div
									key={project.title}
									variants={fadeInScale(index * 0.08)}
									className="flex"
								>
									<Card className="flex flex-col h-full w-full card-gradient border border-white/10 hover:border-primary/40 transition-all duration-300">
										<div className="relative h-48 w-full overflow-hidden rounded-t-lg">
											<Image
												src={project.image}
												alt={project.title}
												fill
												className="object-cover transition-transform duration-500 hover:scale-105"
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											/>
										</div>

										<CardContent className="flex-grow p-6 flex flex-col justify-between">
											<div>
												<h3 className="font-bold text-xl mb-2.5 text-white leading-snug">
													{project.title}
												</h3>
												<p className="text-muted-foreground text-sm leading-relaxed mb-5">
													{project.description}
												</p>
											</div>

											<div className="flex flex-wrap gap-1.5 mt-auto">
												{project.tags.map((tag) => (
													<Badge
														key={tag}
														variant="secondary"
														className="text-xs bg-white/5 border border-white/10 text-zinc-300 font-normal"
													>
														{tag}
													</Badge>
												))}
											</div>
										</CardContent>

										<CardFooter className="p-6 pt-0 border-t border-white/5">
											{renderProjectButtons(project)}
										</CardFooter>
									</Card>
								</motion.div>
							))}
						</div>
					</section>

					{/* ====================================================== */}
					{/* SECTION 2: RESEARCH & ACADEMIC PROJECTS               */}
					{/* ====================================================== */}
					<section className="mb-24">
						<div className="mb-10">
							<div className="flex items-center gap-3 mb-2">
								<div className="h-2 w-2 rounded-full bg-violet-400" />
								<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
									Research & Academic Projects
								</h2>
							</div>
							<p className="text-muted-foreground text-sm sm:text-base">
								Deep learning frameworks, graph optimization algorithms, and IoT automation systems developed through academic research.
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
							{researchProjects.map((project, index) => (
								<motion.div
									key={project.title}
									variants={fadeInScale(index * 0.08)}
									className="flex"
								>
									<Card className="flex flex-col h-full w-full card-gradient border border-white/10 hover:border-violet-500/40 transition-all duration-300">
										<div className="relative h-48 w-full overflow-hidden rounded-t-lg">
											<Image
												src={project.image}
												alt={project.title}
												fill
												className="object-cover transition-transform duration-500 hover:scale-105"
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											/>
										</div>

										<CardContent className="flex-grow p-6 flex flex-col justify-between">
											<div>
												<h3 className="font-bold text-xl mb-2.5 text-white leading-snug">
													{project.title}
												</h3>
												<p className="text-muted-foreground text-sm leading-relaxed mb-5">
													{project.description}
												</p>
											</div>

											<div className="flex flex-wrap gap-1.5 mt-auto">
												{project.tags.map((tag) => (
													<Badge
														key={tag}
														variant="secondary"
														className="text-xs bg-white/5 border border-white/10 text-zinc-300 font-normal"
													>
														{tag}
													</Badge>
												))}
											</div>
										</CardContent>

										<CardFooter className="p-6 pt-0 border-t border-white/5">
											{renderProjectButtons(project)}
										</CardFooter>
									</Card>
								</motion.div>
							))}
						</div>
					</section>

					{/* ====================================================== */}
					{/* SECTION 3: PUBLICATIONS                               */}
					{/* ====================================================== */}
					<section className="mb-12">
						<div className="mb-10">
							<div className="flex items-center gap-3 mb-2">
								<div className="h-2 w-2 rounded-full bg-amber-400" />
								<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
									Publications
								</h2>
							</div>
							<p className="text-muted-foreground text-sm sm:text-base">
								Peer-reviewed research and presentations at international IEEE and Scopus-indexed conferences.
							</p>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
							{publications.map((pub, index) => (
								<motion.div
									key={pub.title}
									variants={fadeInScale(index * 0.1)}
									className="h-full"
								>
									<Card className="flex flex-col h-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-7 hover:border-amber-400/40 transition-all duration-300 shadow-2xl shadow-black/40">
										{/* TOP BADGES */}
										<div className="flex flex-wrap items-center justify-between gap-3 mb-5">
											<div className="inline-flex items-center gap-2 rounded-xl bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-300">
												<BookOpen className="h-3.5 w-3.5 shrink-0" />
												<span>{pub.conference.includes('ICIRSET') ? 'ICIRSET 2025' : 'ICCCNT 2025'}</span>
											</div>

											<div className="inline-flex items-center gap-1.5 text-xs text-zinc-400">
												<Calendar className="h-3.5 w-3.5 text-amber-400" />
												<span>{pub.year}</span>
											</div>
										</div>

										{/* TITLE */}
										<h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
											{pub.title}
										</h3>

										{/* CONFERENCE & VENUE */}
										<div className="space-y-1.5 mb-4 text-xs sm:text-sm text-zinc-300">
											<p className="font-medium text-amber-200/90">
												{pub.conference}
											</p>
											{pub.location && (
												<p className="text-zinc-400 flex items-center gap-1.5">
													<MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
													<span>{pub.location}</span>
												</p>
											)}
										</div>

										{/* AUTHORS */}
										{pub.authors && (
											<p className="text-xs sm:text-sm text-zinc-400 mb-4 pb-4 border-b border-white/5">
												<span className="text-primary font-medium">Authors: </span>
												<span className="text-zinc-200">{pub.authors}</span>
											</p>
										)}

										{/* DESCRIPTION */}
										<p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
											{pub.description}
										</p>

										{/* TAGS */}
										<div className="flex flex-wrap gap-1.5 mb-6">
											{pub.tags.map((tag) => (
												<Badge
													key={tag}
													variant="secondary"
													className="text-xs bg-white/5 border border-white/10 text-zinc-300 font-normal"
												>
													{tag}
												</Badge>
											))}
										</div>

										{/* ACTION BUTTONS */}
										<div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/5 mt-auto">
											{pub.projectUrl && (
												<Button
													size="sm"
													asChild
													className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-md shadow-primary/20"
												>
													<a
														href={pub.projectUrl}
														target="_blank"
														rel="noopener noreferrer"
													>
														<ExternalLink className="h-4 w-4 mr-1.5 shrink-0" />
														Visit Project
													</a>
												</Button>
											)}

											{pub.paperUrl && (
												<Button
													size="sm"
													variant="outline"
													asChild
													className="border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-white"
												>
													<a
														href={pub.paperUrl}
														target="_blank"
														rel="noopener noreferrer"
													>
														<FileText className="h-4 w-4 mr-1.5 shrink-0 text-primary" />
														View Paper
													</a>
												</Button>
											)}

											{pub.certificateUrl && (
												<Button
													size="sm"
													variant="outline"
													asChild
													className="border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-white"
												>
													<a
														href={pub.certificateUrl}
														target="_blank"
														rel="noopener noreferrer"
													>
														<Award className="h-4 w-4 mr-1.5 shrink-0 text-amber-400" />
														View Certificate
													</a>
												</Button>
											)}
										</div>
									</Card>
								</motion.div>
							))}
						</div>
					</section>
				</motion.div>
			</div>
		</div>
	);
}
