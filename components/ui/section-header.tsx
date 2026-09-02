import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
	title: string;
	description?: string;
	className?: string;
	children?: ReactNode;
	isH2?: boolean;
}

export function SectionHeader({
	title,
	description,
	className,
	children,
	isH2 = false,
}: SectionHeaderProps) {
	const HeadingTag = isH2 ? 'h2' : 'h1';

	return (
		<div className={cn('mb-12 max-w-3xl', className)}>
			<div className="inline-block">
				<HeadingTag className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
					{title}
				</HeadingTag>
				<div className="h-1 w-20 bg-primary mt-3 rounded-full" />
			</div>
			{description && (
				<p className="text-muted-foreground text-base sm:text-lg leading-relaxed mt-4">
					{description}
				</p>
			)}
			{children}
		</div>
	);
}