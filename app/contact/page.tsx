'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import {
	Phone,
	Mail,
	MapPin,
	Send,
	Github,
	Linkedin,
	MessageCircle,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
	const [loading, setLoading] = useState(false);

	const [formState, setFormState] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			setLoading(true);

			await emailjs.send(
				'service_jz4pwgg',
				'template_its71yd',
				{
					name: formState.name,
					email: formState.email,
					subject: formState.subject,
					message: formState.message,
					reply_to: formState.email,
					time: new Date().toLocaleString(),
				},
				'R8N4C7HdEOh9vFoiu'
			);

			alert('Message sent successfully');

			setFormState({
				name: '',
				email: '',
				subject: '',
				message: '',
			});
		} catch (error) {
			alert('Failed to send message');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="py-16 md:py-24">
			<div className="container max-w-[1350px]">
				<div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 items-center">

					{/* LEFT SIDE */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="flex flex-col justify-center max-w-[300px]"
					>
						<p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">
							Contact
						</p>

						<h2 className="text-4xl font-bold leading-[1.05] mb-4">
							Let&apos;s Build
							<br />
							Something Great
						</h2>

						<p className="text-muted-foreground text-[15px] leading-7 mb-8">
							Open to software engineering opportunities,
							full-stack collaborations, freelance work,
							and technical discussions.
						</p>

						<div className="space-y-1">

							<a
								href="tel:+917207818784"
								className="group flex items-center gap-3 transition-all duration-300 hover:translate-x-1"
							>
								<div className="contact-icon-box scale-[0.92]">
									<Phone className="h-5 w-5 text-primary" />
								</div>

								<div>
									<p className="text-sm text-muted-foreground mb-1">
										Phone
									</p>

									<p className="text-[15px] font-semibold group-hover:text-primary transition-colors">
										+91 72078 18784
									</p>
								</div>
							</a>

							<a
								href="mailto:vsreevanth@gmail.com"
								className="group flex items-center gap-3 transition-all duration-300 hover:translate-x-1"
							>
								<div className="contact-icon-box scale-[0.92]">
									<Mail className="h-5 w-5 text-primary" />
								</div>

								<div>
									<p className="text-sm text-muted-foreground mb-1">
										Email
									</p>

									<p className="text-[15px] font-semibold group-hover:text-primary transition-colors break-all">
										vsreevanth@gmail.com
									</p>
								</div>
							</a>

							<a
								href="https://maps.google.com/?q=Bengaluru,India"
								target="_blank"
								className="group flex items-center gap-3 transition-all duration-300 hover:translate-x-1"
							>
								<div className="contact-icon-box scale-[0.92]">
									<MapPin className="h-5 w-5 text-primary" />
								</div>

								<div>
									<p className="text-sm text-muted-foreground mb-1">
										Location
									</p>

									<p className="text-[15px] font-semibold group-hover:text-primary transition-colors">
										Bengaluru, India
									</p>
								</div>
							</a>
						</div>

						<div className="flex items-center gap-3 mt-7">

							<a
								href="https://github.com/Sreevanth9"
								target="_blank"
								className="social-btn"
							>
								<Github className="h-5 w-5" />
							</a>

							<a
								href="https://linkedin.com/in/sreevanth-vadlamudi"
								target="_blank"
								className="social-btn"
							>
								<Linkedin className="h-5 w-5" />
							</a>

							<a
								href="https://wa.me/917207818784"
								target="_blank"
								className="social-btn"
							>
								<MessageCircle className="h-5 w-5" />
							</a>
						</div>
					</motion.div>

					{/* RIGHT SIDE */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="contact-form-panel"
					>
						<form
							onSubmit={handleSubmit}
							className="space-y-5"
						>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-5">

								<Input
									placeholder="Your Name"
									name="name"
									value={formState.name}
									onChange={handleChange}
									required
									className="contact-input"
								/>

								<Input
									type="email"
									placeholder="Your Email"
									name="email"
									value={formState.email}
									onChange={handleChange}
									required
									className="contact-input"
								/>
							</div>

							<Input
								placeholder="Subject"
								name="subject"
								value={formState.subject}
								onChange={handleChange}
								required
								className="contact-input"
							/>

							<Textarea
								placeholder="Write your message..."
								name="message"
								value={formState.message}
								onChange={handleChange}
								required
								className="contact-textarea"
							/>

							<Button
								type="submit"
								disabled={loading}
								className="contact-submit-btn"
							>
								{loading ? 'Sending...' : 'Send Message'}
								<Send className="ml-2 h-4 w-4" />
							</Button>
						</form>
					</motion.div>
				</div>
			</div>
		</div>
	);
}