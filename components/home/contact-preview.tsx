'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';

import {
	MessageCircle,
	ArrowRight,
	Mail,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

import { fadeIn } from '@/lib/motion';

export function ContactPreview() {

	return (

		<section
			className="
				py-20
				md:py-24
				relative
				overflow-hidden
			"
		>

			{/* Background Glow */}

			<div
				className="
					absolute
					inset-0
					-bg-gradient-to-b
					from-transparent
					via-primary/5
					to-transparent
				"
			/>

			<div className="container px-4 relative z-10">

				<motion.div

					variants={fadeIn('up', 0.2)}

					initial="hidden"

					whileInView="show"

					viewport={{ once: true }}

					className="
						max-w-4xl
						mx-auto
					"
				>

					<div
						className="
							relative
							rounded-[32px]
							border
							border-white/10
							bg-[#0b1120]/70
							backdrop-blur-2xl
							p-10
							md:p-14
							text-center
							overflow-hidden
						"
					>

						{/* Decorative Glow */}

						<div
							className="
								absolute
								top-0
								left-1/2
								-h-40
								-w-40
								-rounded-full
								bg-primary/20
								blur-3xl
								-translate-x-1/2
							"
						/>

						<p
							className="
								text-primary
								text-sm
								font-semibold
								tracking-[0.25em]
								uppercase
								mb-4
								relative
							"
						>
							Contact
						</p>

						<h2
							className="
								text-4xl
								md:text-5xl
								font-bold
								leading-tight
								mb-6
								relative
							"
						>
							Let&apos;s Build
							<span
								className="
									bg-gradient-to-r
									from-cyan-400
									via-blue-400
									to-purple-400
									bg-clip-text
									text-transparent
								"
							>
								{' '}Something Amazing
							</span>
						</h2>

						<p
							className="
								max-w-2xl
								mx-auto
								text-zinc-400
								text-lg
								leading-relaxed
								mb-10
								relative
							"
						>
							Interested in backend engineering,
							full-stack development, scalable systems,
							or collaboration opportunities?
							Let&apos;s connect and create impactful products.
						</p>

						<div
							className="
								flex
								flex-col
								sm:flex-row
								items-center
								justify-center
								gap-4
								relative
							"
						>

							<Button
								asChild
								size="lg"
								className="
									h-14
									px-8
									rounded-2xl
									text-base
									font-semibold

									shadow-lg
									transition-all
									duration-300

									hover:scale-[1.03]
									hover:shadow-[0_0_35px_rgba(45,212,191,0.3)]
								"
							>

								<Link
									href="/contact"
									className="flex items-center"
								>

									<MessageCircle className="mr-2 h-5 w-5" />

									Get In Touch

								</Link>

							</Button>

							<Button
								asChild
								variant="outline"
								size="lg"
								className="
									h-14
									px-8
									rounded-2xl
									text-base
									font-semibold

									border-white/10
									bg-white/[0.03]

									hover:bg-white/[0.06]
								"
							>

								<a
									href="mailto:vsreevanth@gmail.com"
									className="flex items-center"
								>

									<Mail className="mr-2 h-5 w-5" />

									Email Me

									<ArrowRight className="ml-2 h-4 w-4" />

								</a>

							</Button>

						</div>

					</div>

				</motion.div>

			</div>

		</section>
	);
}