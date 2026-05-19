import * as React from 'react';

import { cn } from '@/lib/utils';

const Card = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (

	<div
		ref={ref}
		className={cn(
			`
			relative
			overflow-hidden
			rounded-[28px]
			border border-white/10
			bg-[#0b1120]/80
			backdrop-blur-2xl
			text-card-foreground

			shadow-[0_10px_40px_rgba(0,0,0,0.35)]

			transition-all duration-500

			before:absolute
			before:inset-0
			before:bg-gradient-to-br
			before:from-white/[0.03]
			before:to-transparent
			before:pointer-events-none

			hover:border-primary/20
			hover:-translate-y-1
			hover:shadow-[0_0_40px_rgba(45,212,191,0.12)]
			`,
			className
		)}
		{...props}
	/>

));

Card.displayName = 'Card';

const CardHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (

	<div
		ref={ref}
		className={cn(
			`
			flex
			flex-col
			space-y-2
			p-7
			`,
			className
		)}
		{...props}
	/>

));

CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (

	<h3
		ref={ref}
		className={cn(
			`
			text-2xl
			font-bold
			tracking-tight
			text-white
			leading-tight
			`,
			className
		)}
		{...props}
	/>

));

CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (

	<p
		ref={ref}
		className={cn(
			`
			text-sm
			leading-7
			text-zinc-400
			`,
			className
		)}
		{...props}
	/>

));

CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (

	<div
		ref={ref}
		className={cn(
			`
			p-7
			pt-0
			`,
			className
		)}
		{...props}
	/>

));

CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (

	<div
		ref={ref}
		className={cn(
			`
			flex
			items-center
			p-7
			pt-0
			`,
			className
		)}
		{...props}
	/>

));

CardFooter.displayName = 'CardFooter';

export {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardDescription,
	CardContent,
};