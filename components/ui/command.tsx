'use client';

import * as React from 'react';

import { type DialogProps } from '@radix-ui/react-dialog';

import { Command as CommandPrimitive } from 'cmdk';

import { Search } from 'lucide-react';

import { cn } from '@/lib/utils';

import {
	Dialog,
	DialogContent,
	DialogClose,
	DialogTitle,
} from '@/components/ui/dialog';

const Command = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
	<CommandPrimitive
		ref={ref}
		className={cn(
			`
			flex h-full w-full
			flex-col overflow-hidden
			rounded-2xl
			bg-[#081120]
			text-white
			`,
			className
		)}
		{...props}
	/>
));

Command.displayName = CommandPrimitive.displayName;

const CommandDialog = ({
	children,
	...props
}: DialogProps) => {
	return (
		<Dialog {...props}>

			<DialogContent
				className="
					overflow-hidden
					p-0
					border border-white/10
					bg-[#081120]
					backdrop-blur-2xl
					shadow-2xl
					max-w-2xl
					text-white
					rounded-2xl
				"
			>

				<DialogTitle className="sr-only">
					Search Command
				</DialogTitle>

				{/* ESC BUTTON */}

				<DialogClose asChild>

					<button
						className="
							absolute
							right-4
							top-4
							z-50
							inline-flex
							items-center
							justify-center
							rounded-md
							border border-white/10
							bg-white/5
							px-3 py-1
							text-xs
							font-medium
							text-zinc-300
							backdrop-blur-xl
							transition-all
							hover:bg-white/10
							hover:text-white
						"
					>
						ESC
					</button>

				</DialogClose>

				<Command
					className="
						[&_[cmdk-group-heading]]:px-4
						[&_[cmdk-group-heading]]:py-2
						[&_[cmdk-group-heading]]:text-xs
						[&_[cmdk-group-heading]]:font-medium
						[&_[cmdk-group-heading]]:text-zinc-400
					"
				>
					{children}
				</Command>

			</DialogContent>

		</Dialog>
	);
};

const CommandInput = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Input>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
	<div
		className="
			flex items-center
			border-b border-white/10
			px-4
		"
		cmdk-input-wrapper=""
	>

		<Search className="mr-3 h-4 w-4 shrink-0 text-zinc-400" />

		<CommandPrimitive.Input
			ref={ref}
			className={cn(
				`
				flex h-14 w-full
				bg-transparent
				py-3
				text-sm
				outline-none
				placeholder:text-zinc-500
				disabled:cursor-not-allowed
				disabled:opacity-50
				`,
				className
			)}
			{...props}
		/>

	</div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.List
		ref={ref}
		className={cn(
			`
			max-h-[420px]
			overflow-y-auto
			overflow-x-hidden
			p-2
			`,
			className
		)}
		{...props}
	/>
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Empty>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
	<CommandPrimitive.Empty
		ref={ref}
		className="
			py-8
			text-center
			text-sm
			text-zinc-400
		"
		{...props}
	/>
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Group>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Group
		ref={ref}
		className={cn(
			`
			overflow-hidden
			text-white
			`,
			className
		)}
		{...props}
	/>
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Separator
		ref={ref}
		className={cn(
			'-mx-1 h-px bg-white/10',
			className
		)}
		{...props}
	/>
));

CommandSeparator.displayName =
	CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Item
		ref={ref}
		className={cn(
			`
			relative flex cursor-pointer
			select-none items-start
			gap-4 rounded-xl
			p-4 text-sm
			outline-none
			transition-all
			hover:bg-white/5
			data-[selected=true]:bg-white/10
			data-[disabled=true]:opacity-50
			`,
			className
		)}
		{...props}
	/>
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
	className,
	...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
	return (
		<span
			className={cn(
				`
				ml-auto
				text-xs
				tracking-widest
				text-zinc-500
				`,
				className
			)}
			{...props}
		/>
	);
};

CommandShortcut.displayName = 'CommandShortcut';

export {
	Command,
	CommandDialog,
	CommandInput,
	CommandList,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandShortcut,
	CommandSeparator,
};