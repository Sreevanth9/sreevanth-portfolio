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
} from 'lucide-react';

export function SearchCommand() {
	const [open, setOpen] = React.useState(false);

	const router = useRouter();

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};

		document.addEventListener('keydown', down);

		return () => {
			document.removeEventListener('keydown', down);
		};
	}, []);

	const pages = [
		{
			title: 'Home',
			description: 'Go to the welcome page',
			icon: Home,
			href: '/',
		},
		{
			title: 'About',
			description: 'Learn more about me and my background',
			icon: User,
			href: '/about',
		},
		{
			title: 'Education',
			description: 'View educational background',
			icon: GraduationCap,
			href: '/education',
		},
		{
			title: 'Experience',
			description: 'Professional experience and internships',
			icon: Briefcase,
			href: '/experience',
		},
		{
			title: 'Skills',
			description: 'Technical skills and technologies',
			icon: Code2,
			href: '/skills',
		},
		{
			title: 'Projects',
			description: 'Portfolio and featured projects',
			icon: FolderKanban,
			href: '/projects',
		},
		{
			title: 'Certificates',
			description: 'Courses and certifications',
			icon: Award,
			href: '/certificates',
		},
		{
			title: 'Contact',
			description: 'Get in touch with me',
			icon: Mail,
			href: '/contact',
		},
	];

	return (
		<>
			{/* SEARCH BUTTON */}

			<button
				onClick={() => setOpen(true)}
				className="
					hidden lg:flex
					items-center justify-between
					w-[240px]
					h-11
					px-4
					rounded-2xl
					border border-white/10
					bg-[#111827]/80
					backdrop-blur-xl
					text-zinc-400
					hover:border-primary/40
					transition-all
				"
			>
				<span className="text-sm">
					Search pages...
				</span>

				<div
					className="
						rounded-md
						bg-white/5
						border border-white/10
						px-2 py-1
						text-[11px]
					"
				>
					Ctrl K
				</div>
			</button>

			{/* SEARCH POPUP */}

			<CommandDialog
				open={open}
				onOpenChange={setOpen}
			>
				<div className="relative border-b border-white/10">

					<CommandInput
						placeholder="Search pages..."
						className="
							h-14
							w-full
							bg-transparent
							px-4
							text-sm
							outline-none
						"
					/>

				</div>

				<CommandList className="max-h-[420px] overflow-y-auto p-3">

					<CommandEmpty className="py-10 text-center text-zinc-400">
						No results found.
					</CommandEmpty>

					<CommandGroup heading="Pages">

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
										flex items-start gap-4
										rounded-2xl
										p-4
										cursor-pointer
										transition-all
										data-[selected=true]:bg-white/10
										hover:bg-white/5
									"
								>

									<div
										className="
											mt-1
											flex h-9 w-9
											items-center justify-center
											rounded-xl
											bg-primary/10
										"
									>
										<Icon className="h-5 w-5 text-primary" />
									</div>

									<div className="flex flex-1 flex-col">

										<span className="font-medium text-white">
											{page.title}
										</span>

										<span className="text-sm text-zinc-400">
											{page.description}
										</span>

									</div>

									<ArrowRight
										className="
											mt-2
											h-4 w-4
											text-zinc-500
											opacity-0
											transition-all
											group-hover:opacity-100
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