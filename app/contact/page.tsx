'use client';

import { useState } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import {
	Phone,
	Mail,
	MapPin,
	Send,
	Github,
	Linkedin,
	MessageCircle,
	Check,
	CheckCircle2,
	RotateCcw,
	ArrowRight,
	ExternalLink,
	Sparkles,
	AlertCircle,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { siteConfig } from '@/lib/constants';

const countryCodes = [
	{ code: '+91', country: 'India', flag: '🇮🇳' },
	{ code: '+1', country: 'USA / Canada', flag: '🇺🇸' },
	{ code: '+44', country: 'UK', flag: '🇬🇧' },
	{ code: '+61', country: 'Australia', flag: '🇦🇺' },
	{ code: '+49', country: 'Germany', flag: '🇩🇪' },
	{ code: '+33', country: 'France', flag: '🇫🇷' },
	{ code: '+81', country: 'Japan', flag: '🇯🇵' },
	{ code: '+65', country: 'Singapore', flag: '🇸🇬' },
	{ code: '+971', country: 'UAE', flag: '🇦🇪' },
	{ code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
	{ code: '+86', country: 'China', flag: '🇨🇳' },
	{ code: '+31', country: 'Netherlands', flag: '🇳🇱' },
	{ code: '+41', country: 'Switzerland', flag: '🇨🇭' },
	{ code: '+46', country: 'Sweden', flag: '🇸🇪' },
	{ code: '+353', country: 'Ireland', flag: '🇮🇪' },
	{ code: '+64', country: 'New Zealand', flag: '🇳🇿' },
	{ code: '+27', country: 'South Africa', flag: '🇿🇦' },
	{ code: '+55', country: 'Brazil', flag: '🇧🇷' },
	{ code: '+82', country: 'South Korea', flag: '🇰🇷' },
	{ code: '+60', country: 'Malaysia', flag: '🇲🇾' },
];

export default function ContactPage() {
	const [loading, setLoading] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [serverError, setServerError] = useState<string | null>(null);

	const [formState, setFormState] = useState({
		name: '',
		email: '',
		countryCode: '+91',
		phone: '',
		subject: '',
		message: '',
	});

	const [errors, setErrors] = useState<{
		name?: string;
		email?: string;
		phone?: string;
		subject?: string;
		message?: string;
	}>({});

	const [submittedData, setSubmittedData] = useState<{
		name: string;
		email: string;
		phone?: string;
	} | null>(null);

	const validate = () => {
		const newErrors: typeof errors = {};

		// Full Name: mandatory, min 2 chars, letters and spaces
		const trimmedName = formState.name.trim();
		if (!trimmedName) {
			newErrors.name = 'Full name is mandatory.';
		} else if (trimmedName.length < 2) {
			newErrors.name = 'Please enter at least 2 characters.';
		} else if (!/^[a-zA-Z\s.'-]+$/.test(trimmedName)) {
			newErrors.name = 'Please enter a valid name (letters only).';
		}

		// Email: mandatory, valid email regex
		const trimmedEmail = formState.email.trim();
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (!trimmedEmail) {
			newErrors.email = 'Email address is mandatory.';
		} else if (!emailRegex.test(trimmedEmail)) {
			newErrors.email = 'Please enter a valid email address (e.g. name@domain.com).';
		}

		// Phone: optional, but if entered must be 6 to 15 digits
		const trimmedPhone = formState.phone.trim();
		if (trimmedPhone) {
			const cleanDigits = trimmedPhone.replace(/[\s\-()]/g, '');
			if (!/^\d{6,15}$/.test(cleanDigits)) {
				newErrors.phone = 'Please enter a valid phone number (6–15 digits) or leave blank.';
			}
		}

		// Subject: mandatory, min 3 chars
		const trimmedSubject = formState.subject.trim();
		if (!trimmedSubject) {
			newErrors.subject = 'Project subject is mandatory.';
		} else if (trimmedSubject.length < 3) {
			newErrors.subject = 'Subject must be at least 3 characters.';
		}

		// Message: mandatory, min 10 chars
		const trimmedMessage = formState.message.trim();
		if (!trimmedMessage) {
			newErrors.message = 'Message is mandatory.';
		} else if (trimmedMessage.length < 10) {
			newErrors.message = 'Please provide at least 10 characters in your message.';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormState((prev) => ({
			...prev,
			[name]: value,
		}));

		// Clear error for field on change
		if (errors[name as keyof typeof errors]) {
			setErrors((prev) => ({
				...prev,
				[name]: undefined,
			}));
		}
		if (serverError) setServerError(null);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!validate()) {
			return;
		}

		try {
			setLoading(true);
			setServerError(null);

			const fullPhone = formState.phone.trim()
				? `${formState.countryCode} ${formState.phone.trim()}`
				: 'Not provided';

			await emailjs.send(
				'service_vjjwvsn',
				'template_nltf84a',
				{
					name: formState.name.trim(),
					email: formState.email.trim(),
					phone: fullPhone,
					subject: formState.subject.trim(),
					message: formState.message.trim(),
					reply_to: formState.email.trim(),
					time: new Date().toLocaleString(),
				},
				'R8N4C7HdEOh9vFoiu'
			);

			setSubmittedData({
				name: formState.name.trim(),
				email: formState.email.trim(),
				phone: formState.phone.trim() ? `${formState.countryCode} ${formState.phone.trim()}` : undefined,
			});

			setIsSubmitted(true);
		} catch (error) {
			console.error('EmailJS transmission error:', error);
			setServerError(
				'Unable to send message via automated service right now. Please email directly at vsreevanth@gmail.com or connect via WhatsApp.'
			);
		} finally {
			setLoading(false);
		}
	};

	const handleReset = () => {
		setFormState({
			name: '',
			email: '',
			countryCode: '+91',
			phone: '',
			subject: '',
			message: '',
		});
		setErrors({});
		setServerError(null);
		setIsSubmitted(false);
		setSubmittedData(null);
	};

	return (
		<div className="py-16 md:py-24 min-h-screen">
			<div className="container max-w-[1350px] px-4 sm:px-6">
				<div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-16 items-start">

					{/* LEFT SIDE: CONTACT INFO */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="flex flex-col justify-start lg:sticky lg:top-28"
					>
						<div className="inline-flex items-center gap-2 text-primary text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3">
							<Sparkles className="h-4 w-4" />
							<span>Get In Touch</span>
						</div>

						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-4 text-white">
							Let&apos;s Build
							<br />
							Something Great
						</h1>

						<p className="text-muted-foreground text-[15px] leading-relaxed mb-8">
							Open to software engineering roles, full-stack development opportunities, backend systems design, and technical discussions.
						</p>

						<div className="space-y-4">
							<a
								href="tel:+917207818784"
								className="group flex items-center gap-3.5 p-2 -ml-2 rounded-2xl transition-all duration-300 hover:bg-white/[0.04]"
							>
								<div className="contact-icon-box shrink-0 scale-[0.92]">
									<Phone className="h-5 w-5 text-primary" />
								</div>
								<div>
									<p className="text-xs text-muted-foreground font-medium">
										Phone
									</p>
									<p className="text-[15px] font-semibold text-white group-hover:text-primary transition-colors">
										+91 72078 18784
									</p>
								</div>
							</a>

							<a
								href="mailto:vsreevanth@gmail.com"
								className="group flex items-center gap-3.5 p-2 -ml-2 rounded-2xl transition-all duration-300 hover:bg-white/[0.04]"
							>
								<div className="contact-icon-box shrink-0 scale-[0.92]">
									<Mail className="h-5 w-5 text-primary" />
								</div>
								<div>
									<p className="text-xs text-muted-foreground font-medium">
										Email
									</p>
									<p className="text-[15px] font-semibold text-white group-hover:text-primary transition-colors break-all">
										vsreevanth@gmail.com
									</p>
								</div>
							</a>

							<div className="flex items-center gap-3.5 p-2 -ml-2 rounded-2xl">
								<div className="contact-icon-box shrink-0 scale-[0.92]">
									<MapPin className="h-5 w-5 text-primary" />
								</div>
								<div>
									<p className="text-xs text-muted-foreground font-medium">
										Location
									</p>
									<p className="text-[15px] font-semibold text-white">
										Bengaluru, India
									</p>
								</div>
							</div>
						</div>

						<div className="pt-8 border-t border-white/10 mt-8">
							<p className="text-xs font-semibold text-muted-foreground mb-4">
								Connect & Follow
							</p>
							<div className="flex items-center gap-3">
								<a
									href={siteConfig.links.github}
									target="_blank"
									rel="noopener noreferrer"
									className="social-btn"
									aria-label="GitHub Profile"
								>
									<Github className="h-5 w-5" />
								</a>

								<a
									href={siteConfig.links.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									className="social-btn"
									aria-label="LinkedIn Profile"
								>
									<Linkedin className="h-5 w-5" />
								</a>

								<a
									href={siteConfig.links.whatsapp}
									target="_blank"
									rel="noopener noreferrer"
									className="social-btn"
									aria-label="WhatsApp Chat"
								>
									<MessageCircle className="h-5 w-5" />
								</a>
							</div>
						</div>
					</motion.div>

					{/* RIGHT SIDE: FORM / PORTFOLIO PERSPECTIVE CONFIRMATION */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="relative"
					>
						<AnimatePresence mode="wait">
							{!isSubmitted ? (
								/* CONTACT FORM */
								<motion.div
									key="contact-form"
									initial={{ opacity: 0, scale: 0.98 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.98 }}
									transition={{ duration: 0.35 }}
									className="contact-form-panel p-6 sm:p-8 md:p-10 rounded-[28px] border border-white/10 bg-[#081120]/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
								>
									<div className="mb-8">
										<h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
											Send a Message
										</h2>
										<p className="text-sm text-zinc-400 mt-1.5">
											Fill out the details below. Required fields are marked with <span className="text-primary font-bold">*</span>.
										</p>
									</div>

									{serverError && (
										<div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-300 text-sm">
											<AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
											<div>
												<p className="font-semibold text-red-200">Transmission Notice</p>
												<p className="mt-0.5">{serverError}</p>
											</div>
										</div>
									)}

									<form onSubmit={handleSubmit} noValidate className="space-y-6">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
											{/* FULL NAME (MANDATORY) */}
											<div className="space-y-2">
												<label
													htmlFor="name"
													className="block text-xs sm:text-sm font-semibold tracking-wide text-zinc-300"
												>
													Full Name <span className="text-primary">*</span>
												</label>
												<Input
													id="name"
													name="name"
													placeholder="Enter your name"
													value={formState.name}
													onChange={handleChange}
													required
													className={`contact-input ${
														errors.name ? 'border-red-500/60 focus-visible:ring-red-500' : ''
													}`}
												/>
												{errors.name && (
													<p className="text-xs text-red-400 font-medium flex items-center gap-1 mt-1">
														<AlertCircle className="h-3.5 w-3.5 shrink-0" />
														{errors.name}
													</p>
												)}
											</div>

											{/* WORK / CONTACT EMAIL (MANDATORY) */}
											<div className="space-y-2">
												<label
													htmlFor="email"
													className="block text-xs sm:text-sm font-semibold tracking-wide text-zinc-300"
												>
													Work Email <span className="text-primary">*</span>
												</label>
												<Input
													id="email"
													type="email"
													name="email"
													placeholder="Enter your email address"
													value={formState.email}
													onChange={handleChange}
													required
													className={`contact-input ${
														errors.email ? 'border-red-500/60 focus-visible:ring-red-500' : ''
													}`}
												/>
												{errors.email && (
													<p className="text-xs text-red-400 font-medium flex items-center gap-1 mt-1">
														<AlertCircle className="h-3.5 w-3.5 shrink-0" />
														{errors.email}
													</p>
												)}
											</div>
										</div>

										{/* PHONE NUMBER (OPTIONAL) WITH COUNTRY CODE */}
										<div className="space-y-2">
											<label
												htmlFor="phone"
												className="block text-xs sm:text-sm font-semibold tracking-wide text-zinc-300"
											>
												Phone Number <span className="text-zinc-500 font-normal text-xs">(Optional)</span>
											</label>

											<div className="grid grid-cols-[130px_1fr] sm:grid-cols-[160px_1fr] gap-2.5 sm:gap-3">
												{/* Country Code Selector */}
												<div className="relative">
													<select
														id="countryCode"
														name="countryCode"
														value={formState.countryCode}
														onChange={handleChange}
														className="w-full h-14 rounded-2xl border border-white/10 bg-white/[0.04] text-white px-2.5 sm:px-3 py-2 text-xs sm:text-sm font-medium focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 cursor-pointer appearance-none transition-all"
														aria-label="Country Code"
													>
														{countryCodes.map((item) => (
															<option
																key={item.code + item.country}
																value={item.code}
																className="bg-[#0b1120] text-white py-2"
															>
																{item.flag} {item.code} ({item.country})
															</option>
														))}
													</select>
													<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 sm:px-3 text-zinc-400 text-xs">
														▼
													</div>
												</div>

												{/* Phone Input */}
												<Input
													id="phone"
													type="tel"
													name="phone"
													placeholder="Enter your phone number"
													value={formState.phone}
													onChange={handleChange}
													className={`contact-input ${
														errors.phone ? 'border-red-500/60 focus-visible:ring-red-500' : ''
													}`}
												/>
											</div>

											{errors.phone && (
												<p className="text-xs text-red-400 font-medium flex items-center gap-1 mt-1">
													<AlertCircle className="h-3.5 w-3.5 shrink-0" />
													{errors.phone}
												</p>
											)}
										</div>

										{/* SUBJECT (MANDATORY) */}
										<div className="space-y-2">
											<label
												htmlFor="subject"
												className="block text-xs sm:text-sm font-semibold tracking-wide text-zinc-300"
											>
												Subject <span className="text-primary">*</span>
											</label>
											<Input
												id="subject"
												name="subject"
												placeholder="Enter subject"
												value={formState.subject}
												onChange={handleChange}
												required
												className={`contact-input ${
													errors.subject ? 'border-red-500/60 focus-visible:ring-red-500' : ''
												}`}
											/>
											{errors.subject && (
												<p className="text-xs text-red-400 font-medium flex items-center gap-1 mt-1">
													<AlertCircle className="h-3.5 w-3.5 shrink-0" />
													{errors.subject}
												</p>
											)}
										</div>

										{/* MESSAGE (MANDATORY) */}
										<div className="space-y-2">
											<label
												htmlFor="message"
												className="block text-xs sm:text-sm font-semibold tracking-wide text-zinc-300"
											>
												Message <span className="text-primary">*</span>
											</label>
											<Textarea
												id="message"
												name="message"
												placeholder="Enter your message"
												value={formState.message}
												onChange={handleChange}
												required
												rows={5}
												className={`contact-textarea ${
													errors.message ? 'border-red-500/60 focus-visible:ring-red-500' : ''
												}`}
											/>
											{errors.message && (
												<p className="text-xs text-red-400 font-medium flex items-center gap-1 mt-1">
													<AlertCircle className="h-3.5 w-3.5 shrink-0" />
													{errors.message}
												</p>
											)}
										</div>

										{/* SUBMIT BUTTON */}
										<Button
											type="submit"
											disabled={loading}
											className="contact-submit-btn bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 transition-all duration-300 active:scale-[0.99] flex items-center justify-center gap-2 text-base"
										>
											{loading ? (
												<>
													<div className="h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
													<span>Sending Message...</span>
												</>
											) : (
												<>
													<span>Send Message</span>
													<Send className="h-4 w-4 ml-1" />
												</>
											)}
										</Button>

										<p className="text-center text-xs text-zinc-500 pt-1">
											Your message will be delivered securely to Vadlamudi Sreevanth Chowdhary&apos;s direct inbox.
										</p>
									</form>
								</motion.div>
							) : (
								/* PORTFOLIO PERSPECTIVE SUCCESS CONFIRMATION SCREEN */
								<motion.div
									key="success-card"
									initial={{ opacity: 0, scale: 0.95, y: 20 }}
									animate={{ opacity: 1, scale: 1, y: 0 }}
									exit={{ opacity: 0, scale: 0.95 }}
									transition={{ duration: 0.4, ease: 'easeOut' }}
									className="p-6 sm:p-8 md:p-10 rounded-[28px] border border-primary/30 bg-[#081120]/90 backdrop-blur-2xl shadow-[0_25px_60px_rgba(45,212,191,0.15)] relative overflow-hidden"
								>
									{/* Glow background */}
									<div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />

									{/* Status Badge */}
									<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
										<span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
										<span>Message Delivered Successfully</span>
									</div>

									{/* Icon and Heading */}
									<div className="flex items-start gap-4 mb-6">
										<div className="h-14 w-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0 shadow-lg shadow-primary/10">
											<Check className="h-7 w-7 stroke-[3]" />
										</div>
										<div>
											<h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
												Thank you for reaching out{submittedData?.name ? `, ${submittedData.name.split(' ')[0]}` : ''}!
											</h2>
											<p className="text-sm sm:text-base text-zinc-300 mt-2 leading-relaxed">
												Your message has been delivered directly to my inbox. I actively review all technical inquiries, project proposals, and engineering opportunities.
											</p>
										</div>
									</div>

									{/* What Happens Next: Portfolio Perspective */}
									<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 mb-8">
										<h3 className="text-xs font-bold text-primary tracking-[0.15em] uppercase mb-4">
											What Happens Next
										</h3>

										<div className="space-y-4">
											<div className="flex items-start gap-3.5">
												<div className="h-6 w-6 rounded-full bg-primary/20 text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-primary/30">
													1
												</div>
												<div>
													<p className="text-sm font-semibold text-white">
														Inquiry Review & Technical Scope
													</p>
													<p className="text-xs sm:text-sm text-zinc-400 mt-0.5 leading-relaxed">
														I will review your message, architecture requirements, or role details to understand how my skills align.
													</p>
												</div>
											</div>

											<div className="flex items-start gap-3.5">
												<div className="h-6 w-6 rounded-full bg-primary/20 text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-primary/30">
													2
												</div>
												<div>
													<p className="text-sm font-semibold text-white">
														Direct Follow-Up
													</p>
													<p className="text-xs sm:text-sm text-zinc-400 mt-0.5 leading-relaxed">
														I will respond via email to <strong className="text-zinc-200">{submittedData?.email}</strong>
														{submittedData?.phone ? (
															<> or via phone / WhatsApp at <strong className="text-zinc-200">{submittedData.phone}</strong></>
														) : ''} within 24 hours.
													</p>
												</div>
											</div>

											<div className="flex items-start gap-3.5">
												<div className="h-6 w-6 rounded-full bg-primary/20 text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-primary/30">
													3
												</div>
												<div>
													<p className="text-sm font-semibold text-white">
														Engineering Discussion / Next Steps
													</p>
													<p className="text-xs sm:text-sm text-zinc-400 mt-0.5 leading-relaxed">
														We can schedule a technical discussion or call to move the collaboration forward.
													</p>
												</div>
											</div>
										</div>
									</div>

									{/* Urgent contact note */}
									<div className="mb-8 text-xs sm:text-sm text-zinc-400 flex items-center gap-2">
										<span>Need an immediate response? Connect directly on WhatsApp:</span>
										<a
											href={siteConfig.links.whatsapp}
											target="_blank"
											rel="noopener noreferrer"
											className="text-primary hover:underline font-medium inline-flex items-center gap-1"
										>
											+91 72078 18784 <ExternalLink className="h-3 w-3" />
										</a>
									</div>

									{/* Action Buttons */}
									<div className="flex flex-col sm:flex-row gap-3 pt-2">
										<Button
											type="button"
											onClick={handleReset}
											variant="outline"
											className="rounded-xl border-white/15 bg-white/5 hover:bg-white/10 text-white font-medium h-12 px-5 flex items-center justify-center gap-2"
										>
											<RotateCcw className="h-4 w-4 text-primary" />
											<span>Send Another Message</span>
										</Button>

										<Button
											asChild
											className="rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 px-6 shadow-md shadow-primary/20 flex items-center justify-center gap-2"
										>
											<Link href="/">
												<span>Return to Home</span>
												<ArrowRight className="h-4 w-4" />
											</Link>
										</Button>

										<a
											href={siteConfig.links.linkedin}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] hover:border-primary/40 hover:bg-primary/5 px-5 h-12 text-sm font-medium text-white transition-all"
										>
											<Linkedin className="h-4 w-4 text-primary" />
											<span>LinkedIn</span>
										</a>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				</div>
			</div>
		</div>
	);
}