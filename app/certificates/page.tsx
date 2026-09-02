'use client';

import { motion } from 'framer-motion';
import { CalendarDays, ExternalLink, Award } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { certificates } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function CertificatesPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container px-4 sm:px-6">
				<SectionHeader
					title="Certificates"
					description="Professional certifications validating technical expertise, software development skills, and continuous learning."
				/>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
				>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
						{certificates.map((cert, index) => (
							<motion.div
								key={cert.title + index}
								variants={fadeIn('up', (index % 6) * 0.08)}
								whileHover={{ y: -4 }}
								transition={{
									type: 'spring',
									stiffness: 220,
									damping: 18,
								}}
								className="h-full"
							>
								<a
									href={cert.url ?? '#'}
									target="_blank"
									rel="noopener noreferrer"
									className="group block h-full"
									aria-label={`View certificate for ${cert.title}`}
								>
									<Card
										className="
											h-[385px]
											rounded-3xl
											border border-white/10
											bg-[#111827]
											overflow-hidden
											transition-all duration-300
											hover:-translate-y-1
											hover:border-primary/40
											hover:shadow-2xl hover:shadow-primary/5
											flex flex-col justify-between
										"
									>
										<CardContent className="p-6 flex flex-col h-full justify-between">
											<div>
												{/* Header: Title, Issuer, and Date */}
												<div className="flex items-start justify-between gap-3 mb-4 min-h-[72px]">
													<div className="flex-1 pr-1">
														<h2 className="text-[1.125rem] font-bold leading-snug text-white line-clamp-2 group-hover:text-primary transition-colors">
															{cert.title}
														</h2>

														<p className="mt-1.5 text-xs text-primary font-medium tracking-wide">
															{cert.issuer}
														</p>
													</div>

													<div className="flex items-center gap-1.5 text-xs text-muted-foreground whitespace-nowrap pt-0.5 shrink-0">
														<CalendarDays className="h-3.5 w-3.5 text-zinc-400" />
														<span>{cert.date}</span>
													</div>
												</div>

												{/* Description: Exactly clamped height */}
												{cert.description && (
													<p className="text-sm leading-6 text-muted-foreground mb-4 line-clamp-3 h-[72px]">
														{cert.description}
													</p>
												)}

												{/* Skills: Exactly clamped container */}
												<div className="flex flex-wrap gap-1.5 mb-4 h-[58px] content-start overflow-hidden">
													{cert.skills?.map((skill) => (
														<span
															key={skill}
															className="
																px-2.5 py-1
																text-[11px]
																rounded-full
																bg-white/[0.04]
																border border-white/10
																text-zinc-300
																font-normal
															"
														>
															{skill}
														</span>
													))}
												</div>
											</div>

											{/* Footer */}
											<div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
												<div className="inline-flex items-center gap-2 text-primary text-sm font-medium transition-all duration-300 group-hover:gap-3">
													<span>View Certificate</span>
													<ExternalLink className="h-4 w-4" />
												</div>

												<span className="inline-flex items-center gap-1 text-[11px] text-zinc-500 uppercase tracking-wider font-medium">
													<Award className="h-3.5 w-3.5 text-primary/70" />
													Verified
												</span>
											</div>
										</CardContent>
									</Card>
								</a>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}