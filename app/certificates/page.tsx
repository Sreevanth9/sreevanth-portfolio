'use client';

import { motion } from 'framer-motion';
import { CalendarDays, ExternalLink } from 'lucide-react';
import Link from 'next/link';

import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { certificates } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function CertificatesPage() {
	return (
		<div className="py-20 md:py-28">
			<div className="container">
				<div className="mb-10 max-w-3xl">
					<SectionHeader
						title="Certificates"
						description="Professional certifications validating technical expertise, software development skills, and continuous learning."
					/>
				</div>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
				>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{certificates.map((cert, index) => (
							<motion.div
								key={index}
								variants={fadeIn('up', index * 0.1)}
								whileHover={{ y: -4 }}
								transition={{
									type: 'spring',
									stiffness: 220,
									damping: 18,
								}}
							>
								<Link
									href={cert.url ?? '#'}
									target="_blank"
									rel="noopener noreferrer"
									className="group block h-full"
								>
									<Card
										className="
											h-full
											rounded-3xl
											border border-white/10
											bg-[#111827]
											overflow-hidden
											transition-all duration-300
											hover:-translate-y-1
											hover:border-primary/30
											hover:shadow-2xl
										"
									>
										<CardContent className="p-6 flex flex-col h-full">
											
											{/* Header */}
											<div className="flex items-start justify-between gap-4 mb-5">
												<div>
													<h2 className="text-[1.25rem] font-bold leading-snug text-white">
														{cert.title}
													</h2>

													<p className="mt-2 text-sm text-muted-foreground">
														{cert.issuer}
													</p>
												</div>

												<div className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap">
													<CalendarDays className="h-3.5 w-3.5" />
													<span>{cert.date}</span>
												</div>
											</div>

											{/* Description */}
											{cert.description && (
												<p className="text-sm leading-6 text-muted-foreground mb-5 line-clamp-4">
													{cert.description}
												</p>
											)}

											{/* Skills */}
											{cert.skills?.length ? (
												<div className="flex flex-wrap gap-2 mb-6">
													{cert.skills.map((skill) => (
														<span
															key={skill}
															className="
																px-3 py-1
																text-[11px]
																rounded-full
																bg-white/[0.04]
																border border-white/10
																text-gray-300
															"
														>
															{skill}
														</span>
													))}
												</div>
											) : null}

											{/* Footer */}
											<div className="mt-auto">
												<div className="inline-flex items-center gap-2 text-primary text-sm font-medium transition-all duration-300 group-hover:gap-3">
													<span>View Certificate</span>

													<ExternalLink className="h-4 w-4" />
												</div>
											</div>

										</CardContent>
									</Card>
								</Link>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}