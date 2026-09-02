'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import { siteConfig } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { SearchCommand } from '@/components/layout/search-command';
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetTitle,
	SheetDescription,
} from '@/components/ui/sheet';

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const pathname = usePathname();
	const router = useRouter();

	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 30);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.45 }}
			className="
				fixed top-0 left-0 right-0
				z-50
				flex justify-center
				pt-4
			"
		>
			<div
				className={`
					w-[95%]
					max-w-7xl
					h-16
					rounded-2xl
					border border-white/10
					backdrop-blur-2xl
					transition-all duration-300
					${isScrolled
						? 'bg-[#081120]/85 shadow-2xl'
						: 'bg-[#081120]/60'}
				`}
			>
				<div className="flex h-full items-center justify-between px-3 sm:px-5 lg:px-6">

					{/* LEFT: LOGO & NAV */}
					<div className="flex items-center gap-3 sm:gap-4 lg:gap-4 xl:gap-7 2xl:gap-9 min-w-0 flex-1">
						<Link href="/" className="flex items-center shrink-0" aria-label="Vadlamudi Sreevanth Chowdhary Home">
							<motion.div
								whileHover={{ scale: 1.03 }}
								className="
									text-2xl sm:text-3xl
									font-extrabold
									tracking-tight
									bg-gradient-to-r
									from-[#21d4c5]
									via-[#7b61ff]
									to-[#f4b860]
									bg-clip-text
									text-transparent
								"
							>
								Portfolio
							</motion.div>
						</Link>

						{/* DESKTOP NAV (Fluid spacing and typography for iPad landscape to 4K) */}
						<nav className="hidden lg:flex items-center gap-2 xl:gap-4 2xl:gap-6 whitespace-nowrap text-xs xl:text-sm">
							{siteConfig.mainNav.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className={`
										relative
										font-medium
										transition-all duration-300
										py-1
										${pathname === item.href
											? 'text-primary'
											: 'text-zinc-400 hover:text-white'}
									`}
								>
									{item.title}

									{pathname === item.href && (
										<span
											className="
												absolute
												-left-1
												right-0
												-top-5
												h-[2px]
												bg-primary
												rounded-full
											"
										/>
									)}
								</Link>
							))}
						</nav>
					</div>

					{/* RIGHT: SEARCH & MOBILE MENU */}
					<div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
						<SearchCommand />

						{/* MOBILE MENU */}
						<div className="lg:hidden flex items-center">
							<Sheet open={isOpen} onOpenChange={setIsOpen}>
								<SheetTrigger asChild>
									<Button
										variant="ghost"
										size="icon"
										className="text-white hover:bg-white/10 h-9 w-9 sm:h-10 sm:w-10"
										aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
									>
										{isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
									</Button>
								</SheetTrigger>

								<SheetContent
									className="
										border-white/10
										bg-[#081120]
										backdrop-blur-2xl
										w-[85vw] max-w-sm
										p-6
									"
								>
									<SheetTitle className="sr-only">Navigation Menu</SheetTitle>
									<SheetDescription className="sr-only">
										Portfolio navigation links and sections
									</SheetDescription>

									<div className="mt-8 flex flex-col gap-8">
										<Link
											href="/"
											onClick={(e) => {
												e.preventDefault();
												setIsOpen(false);
												router.push('/');
											}}
											aria-label="Vadlamudi Sreevanth Chowdhary Home"
											className="
												text-2xl sm:text-3xl
												font-extrabold
												tracking-tight
												bg-gradient-to-r
												from-[#21d4c5]
												via-[#7b61ff]
												to-[#f4b860]
												bg-clip-text
												text-transparent
											"
										>
											Portfolio
										</Link>

										<nav className="flex flex-col gap-2">
											{siteConfig.mainNav.map((item) => (
												<Link
													key={item.href}
													href={item.href}
													onClick={(e) => {
														e.preventDefault();
														setIsOpen(false);
														router.push(item.href);
													}}
													className={`
														text-base
														font-medium
														transition-colors
														py-2.5 px-3.5
														rounded-xl
														${pathname === item.href
															? 'text-primary bg-primary/10 font-semibold'
															: 'text-zinc-300 hover:text-white hover:bg-white/5'}
													`}
												>
													{item.title}
												</Link>
											))}
										</nav>
									</div>
								</SheetContent>
							</Sheet>
						</div>
					</div>

				</div>
			</div>
		</motion.header>
	);
}