'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command';

import {
	Home,
	User,
	GraduationCap,
	Briefcase,
	Code2,
	FolderKanban,
	Award,
	Mail,
	ArrowRight,
	Search,
} from 'lucide-react';

export function SearchCommand() {
	const [open, setOpen] = React.useState(false);
	const [shortcutHint, setShortcutHint] = React.useState('⌘ K');
	const router = useRouter();

	// Detect OS for dynamic keyboard shortcut hint (macOS/iOS -> ⌘ K, Windows/Linux -> Ctrl K)
	React.useEffect(() => {
		const isApple = /(Mac|iPhone|iPod|iPad)/i.test(
			(typeof navigator !== 'undefined' && (navigator.platform || navigator.userAgent)) || ''
		);
		setShortcutHint(isApple ? '⌘ K' : 'Ctrl K');
	}, []);

	// Global keyboard shortcuts: Cmd+K / Ctrl+K to toggle, Escape to close
	React.useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
				e.preventDefault();
				setOpen((prev) => !prev);
			}

			if (e.key === 'Escape' && open) {
				e.preventDefault();
				setOpen(false);
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [open]);

	const pages = [
		{
			title: 'Home',
			description: 'Go to the welcome page & summary overview',
			icon: Home,
			href: '/',
		},
		{
			title: 'About',
			description: 'Learn more about my background, engineering philosophy, and bio',
			icon: User,
			href: '/about',
		},
		{
			title: 'Education',
			description: 'Academic background at Amrita Vishwa Vidyapeetham',
			icon: GraduationCap,
			href: '/education',
		},
		{
			title: 'Experience',
			description: 'Professional experience, software internships, and roles',
			icon: Briefcase,
			href: '/experience',
		},
		{
			title: 'Technical Skills',
			description: 'Full stack development, backend systems, AI/ML, and cloud tools',
			icon: Code2,
			href: '/skills',
		},
		{
			title: 'Projects & Publications',
			description: 'Research platforms, deep learning architectures, and peer-reviewed papers',
			icon: FolderKanban,
			href: '/projects',
		},
		{
			title: 'Certificates',
			description: 'Verified professional certifications & engineering credentials',
			icon: Award,
			href: '/certificates',
		},
		{
			title: 'Contact',
			description: 'Get in touch for software engineering opportunities & collaborations',
			icon: Mail,
			href: '/contact',
		},
	];

	return (
		<>
			{/* DESKTOP SEARCH BAR (Fluid, responsive for laptop, iPad landscape, desktop) */}
			<button
				type="button"
				onClick={() => setOpen(true)}
				aria-label="Search pages and projects"
				className="
					hidden lg:flex
					items-center justify-between
					w-36 lg:w-44 xl:w-56 2xl:w-64
					min-w-0
					h-10 xl:h-11
					px-3 xl:px-4
					rounded-2xl
					border border-white/10
					bg-[#111827]/80
					backdrop-blur-xl
					text-zinc-400
					hover:border-primary/40
					hover:text-zinc-200
					hover:bg-[#111827]
					transition-all
					group
					focus:outline-none focus:ring-2 focus:ring-primary/40
				"
			>
				<div className="flex items-center gap-2 min-w-0 truncate">
					<Search className="h-3.5 w-3.5 xl:h-4 xl:w-4 text-zinc-400 group-hover:text-primary transition-colors shrink-0" />
					<span className="text-xs xl:text-sm truncate font-normal">
						Search pages...
					</span>
				</div>

				<div
					className="
						shrink-0
						rounded-md
						bg-white/5
						border border-white/10
						px-1.5 xl:px-2 py-0.5
						text-[10px] xl:text-[11px]
						text-zinc-400
						font-mono
						ml-1.5
					"
				>
					{shortcutHint}
				</div>
			</button>

			{/* MOBILE / IPAD PORTRAIT SEARCH ICON TRIGGER */}
			<button
				type="button"
				onClick={() => setOpen(true)}
				aria-label="Search pages and projects"
				className="
					flex lg:hidden
					items-center justify-center
					h-9 w-9 sm:h-10 sm:w-10
					rounded-xl
					border border-white/10
					bg-[#111827]/80
					text-zinc-400 hover:text-white hover:border-primary/40
					transition-all
					focus:outline-none focus:ring-2 focus:ring-primary/40
					mr-1.5
				"
			>
				<Search className="h-4 w-4" />
			</button>

			{/* SEARCH COMMAND DIALOG */}
			<CommandDialog
				open={open}
				onOpenChange={setOpen}
			>
				<div className="relative">
					<CommandInput
						placeholder="Search pages, projects, skills..."
						className="
							h-14
							w-full
							bg-transparent
							pl-4 pr-12
							text-sm
							outline-none
						"
						autoFocus
					/>
				</div>

				<CommandList className="max-h-[420px] overflow-y-auto p-3">
					<CommandEmpty className="py-10 text-center text-zinc-400 text-sm">
						No results found.
					</CommandEmpty>

					<CommandGroup heading="Pages & Portfolio Sections">
						{pages.map((page) => {
							const Icon = page.icon;

							return (
								<CommandItem
									key={page.href}
									onSelect={() => {
										router.push(page.href);
										setOpen(false);
									}}
									className="
										group
										flex items-start gap-3.5 sm:gap-4
										rounded-2xl
										p-3 sm:p-4
										cursor-pointer
										transition-all
										data-[selected=true]:bg-white/10
										hover:bg-white/5
									"
								>
									<div
										className="
											mt-0.5
											flex h-9 w-9
											items-center justify-center
											rounded-xl
											bg-primary/10
											text-primary
											shrink-0
										"
									>
										<Icon className="h-5 w-5" />
									</div>

									<div className="flex flex-1 flex-col min-w-0">
										<span className="font-medium text-white text-sm sm:text-base truncate">
											{page.title}
										</span>

										<span className="text-xs sm:text-sm text-zinc-400 truncate">
											{page.description}
										</span>
									</div>

									<ArrowRight
										className="
											mt-1.5
											h-4 w-4
											text-zinc-500
											opacity-0
											transition-all
											group-hover:opacity-100 group-hover:text-primary group-hover:translate-x-0.5
											shrink-0
										"
									/>
								</CommandItem>
							);
						})}
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
}