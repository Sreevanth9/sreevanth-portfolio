'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

import { motion } from 'framer-motion';

import {
	Menu,
	ChevronDown,
} from 'lucide-react';

import { siteConfig } from '@/lib/constants';

import { Button } from '@/components/ui/button';

import { SearchCommand } from '@/components/layout/search-command';

import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);

	const pathname = usePathname();

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

				<div className="flex h-full items-center justify-between px-6">

					{/* LEFT */}

					<div className="flex items-center gap-10">

						<Link href="/" className="flex items-center">

							<motion.div
								whileHover={{ scale: 1.03 }}
								className="
									text-3xl
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

						{/* DESKTOP NAV */}

						<nav className="hidden lg:flex items-center gap-7">

							{siteConfig.mainNav.map((item) => (

								<Link
									key={item.href}
									href={item.href}
									className={`
										relative
										text-sm
										font-medium
										transition-all duration-300

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
												-top-6
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

					{/* RIGHT */}

					<div className="hidden md:flex items-center">

						<SearchCommand />

					</div>

					{/* MOBILE MENU */}

					<div className="md:hidden">

						<Sheet>

							<SheetTrigger asChild>

								<Button
									variant="ghost"
									size="icon"
									className="text-white"
								>
									<Menu className="h-5 w-5" />
								</Button>

							</SheetTrigger>

							<SheetContent
								className="
									border-white/10
									bg-[#081120]
									backdrop-blur-2xl
								"
							>

								<div className="mt-10 flex flex-col gap-8">

									<Link
										href="/"
										className="
											text-3xl
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

									<nav className="flex flex-col gap-5">

										{siteConfig.mainNav.map((item) => (

											<Link
												key={item.href}
												href={item.href}
												className={`
													text-base
													font-medium
													transition-colors

													${pathname === item.href
														? 'text-primary'
														: 'text-zinc-400'}
												`}
											>
												{item.title}
											</Link>

										))}

									</nav>

									<div className="pt-4">

										<DropdownMenu>

											<DropdownMenuTrigger asChild>

												<Button
													variant="outline"
													className="
														w-full
														justify-between
														border-white/10
														bg-white/[0.03]
													"
												>
													Social Links

													<ChevronDown className="ml-2 h-4 w-4" />

												</Button>

											</DropdownMenuTrigger>

											<DropdownMenuContent
												align="end"
												className="
													border-white/10
													bg-[#081120]
													text-white
												"
											>

												<DropdownMenuItem asChild>

													<Link
														href={siteConfig.links.github}
														target="_blank"
													>
														GitHub
													</Link>

												</DropdownMenuItem>

												<DropdownMenuItem asChild>

													<Link
														href={siteConfig.links.linkedin}
														target="_blank"
													>
														LinkedIn
													</Link>

												</DropdownMenuItem>

												<DropdownMenuItem asChild>

													<Link
														href={siteConfig.links.leetcode}
														target="_blank"
													>
														LeetCode
													</Link>

												</DropdownMenuItem>

											</DropdownMenuContent>

										</DropdownMenu>

									</div>

								</div>

							</SheetContent>

						</Sheet>

					</div>

				</div>

			</div>

		</motion.header>
	);
}