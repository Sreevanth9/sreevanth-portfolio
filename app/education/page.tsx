'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { education } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function EducationPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="max-w-3xl mx-auto"
				>
					<SectionHeader
						title="Education"
						description="My academic journey and foundation in computer science, software engineering, and analytical problem solving."
					/>

					<div className="space-y-8">
						{education.map((edu, index) => (
							<motion.div
								key={index}
								variants={fadeIn('up', 0.2 * index)}
								className="relative"
							>
								<Card className="card-gradient">
									<CardContent className="p-6">
										<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
											<div>
												<h2 className="text-2xl font-semibold">
													{edu.degree}
												</h2>

												<p className="text-primary">
													{edu.field}
												</p>
											</div>

											{edu.gpa && (
												<p className="text-lg font-semibold mt-2 md:mt-0">
													GPA: {edu.gpa}
												</p>
											)}
										</div>

										<div className="space-y-3">
											<div className="flex items-center text-muted-foreground">
												<MapPin className="h-4 w-4 mr-2" />
												{edu.institution}, {edu.location}
											</div>

											<div className="flex items-center text-muted-foreground">
												<Calendar className="h-4 w-4 mr-2" />
												{edu.startDate} - {edu.endDate}
											</div>
										</div>

										<div className="mt-6">
											<div className="space-y-3">
												{edu.achievements.map((achievement, i) => (
													<p
														key={i}
														className="text-muted-foreground leading-7"
													>
														{achievement}
													</p>
												))}
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}