'use client';

import { motion } from 'framer-motion';
import {
	Calendar,
	MapPin,
	CheckCircle2,
	ExternalLink,
	FileText,
	Award,
	Sparkles,
	Code2,
} from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
	primaryExperience,
	engineeringExperiences,
} from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function ExperiencePage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="max-w-4xl mx-auto space-y-12"
				>
					{/* Page Header */}
					<div>
						<motion.h1
							variants={fadeIn('down', 0.2)}
							className="text-4xl font-bold mb-4"
						>
							Professional Experience
						</motion.h1>

						<motion.p
							variants={fadeIn('down', 0.3)}
							className="text-lg text-muted-foreground leading-8"
						>
							Real-world engineering, research, and software development experience.
						</motion.p>
					</div>

					{/* Primary Experience Card: India Space Lab */}
					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="card-gradient border border-primary/30 relative overflow-hidden shadow-xl">
							<div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />

							<CardContent className="p-6 md:p-8">
								{/* Header with Title, Company, Category, and Metadata */}
								<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
									<div>
										<div className="flex flex-wrap items-center gap-2 mb-2">
											<Badge
												variant="secondary"
												className="px-3 py-0.5 text-xs font-medium rounded-full bg-primary/15 text-primary border border-primary/30 flex items-center gap-1"
											>
												<Sparkles className="h-3 w-3" />
												{primaryExperience.category}
											</Badge>
										</div>

										<h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
											{primaryExperience.title}
										</h2>

										<p className="text-xl font-semibold text-primary mt-1">
											{primaryExperience.company}
										</p>
									</div>

									<div className="flex flex-col sm:flex-row md:flex-col gap-2 text-sm text-muted-foreground whitespace-nowrap">
										<div className="flex items-center">
											<Calendar className="h-4 w-4 mr-2 text-primary/80 shrink-0" />
											<span>{primaryExperience.period}</span>
										</div>

										<div className="flex items-center">
											<MapPin className="h-4 w-4 mr-2 text-primary/80 shrink-0" />
											<span>{primaryExperience.location}</span>
										</div>
									</div>
								</div>

								{/* Professional Summary */}
								{primaryExperience.summary && (
									<p className="text-base text-gray-300 leading-relaxed mb-6">
										{primaryExperience.summary}
									</p>
								)}

								{/* Key Contributions */}
								<div className="space-y-4 mb-8">
									<h3 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
										Key Contributions
									</h3>

									<ul className="space-y-3">
										{primaryExperience.description.map((item, i) => (
											<li
												key={i}
												className="flex items-start"
											>
												<CheckCircle2 className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
												<span className="text-gray-300 leading-relaxed text-sm md:text-base">
													{item}
												</span>
											</li>
										))}
									</ul>
								</div>

								{/* Technologies */}
								<div className="mb-8">
									<h3 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-3">
										Technologies & Areas
									</h3>

									<div className="flex flex-wrap gap-2">
										{primaryExperience.technologies.map((tech, i) => (
											<Badge
												key={i}
												variant="secondary"
												className="px-3 py-1 text-xs font-medium rounded-full bg-white/[0.04] border border-white/10 text-gray-300 hover:border-primary/40 hover:text-white transition-all"
											>
												{tech}
											</Badge>
										))}
									</div>
								</div>

								{/* Verification Documents */}
								<div className="pt-6 border-t border-white/10">
									<h3 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-4">
										Documentation
									</h3>

									<div className="flex flex-wrap gap-3">
										{primaryExperience.documents?.map((doc, i) => (
											<a
												key={i}
												href={doc.url}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white bg-white/[0.05] hover:bg-primary/20 border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-[0.98]"
												aria-label={`${doc.title} (opens in a new tab)`}
											>
												{i === 0 ? (
													<FileText className="h-4 w-4 text-primary" />
												) : (
													<Award className="h-4 w-4 text-primary" />
												)}
												<span>{doc.title}</span>
												<ExternalLink className="h-3.5 w-3.5 text-muted-foreground ml-0.5" />
											</a>
										))}
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* Secondary Section: Engineering & Development Experience */}
					<motion.div
						variants={fadeIn('up', 0.4)}
						className="space-y-6 pt-4"
					>
						<div>
							<div className="flex items-center gap-2 mb-2">
								<Code2 className="h-5 w-5 text-primary" />
								<h2 className="text-2xl font-bold tracking-tight">
									Engineering Experience
								</h2>
							</div>

							<p className="text-sm text-muted-foreground">
								Personal, academic, and research-focused software systems.
							</p>
						</div>

						<div className="grid grid-cols-1 gap-6">
							{engineeringExperiences.map((exp, index) => (
								<motion.div
									key={index}
									variants={fadeIn('up', 0.2 * (index + 1))}
								>
									<Card className="card-gradient">
										<CardContent className="p-6">
											<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
												<div>
													<h3 className="text-xl font-semibold">
														{exp.title}
													</h3>

													<p className="text-primary text-sm font-medium">
														{exp.company}
													</p>
												</div>

												<div className="flex items-center gap-4 text-xs text-muted-foreground">
													<div className="flex items-center">
														<Calendar className="h-3.5 w-3.5 mr-1 text-primary/80" />
														<span>{exp.period || `${exp.startDate} - ${exp.endDate}`}</span>
													</div>

													<div className="flex items-center">
														<MapPin className="h-3.5 w-3.5 mr-1 text-primary/80" />
														<span>{exp.location}</span>
													</div>
												</div>
											</div>

											<div className="space-y-3 mb-5">
												<ul className="space-y-2.5">
													{exp.description.map((item, i) => (
														<li
															key={i}
															className="flex items-start"
														>
															<CheckCircle2 className="h-4 w-4 mr-2.5 text-primary shrink-0 mt-1" />
															<span className="text-muted-foreground leading-6 text-sm">
																{item}
															</span>
														</li>
													))}
												</ul>
											</div>

											<div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
												{exp.technologies.map((tech, i) => (
													<Badge
														key={i}
														variant="secondary"
														className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-white/[0.03] border border-white/10 text-gray-300"
													>
														{tech}
													</Badge>
												))}
											</div>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}