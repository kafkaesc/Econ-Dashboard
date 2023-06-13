import NextLink from 'next/link';

interface LinkProps {
	children: any;
	className?: string;
	href: string;
	[props: string]: any;
}

export default function Link({
	children,
	className,
	href,
	...props
}: LinkProps) {
	return className ? (
		<NextLink
			{...props}
			className={`text-blue-700 underline hover:text-blue-800 ${className}`}
			href={href}
		>
			{children}
		</NextLink>
	) : (
		<NextLink
			{...props}
			className="text-blue-700 underline hover:text-blue-800"
			href={href}
		>
			{children}
		</NextLink>
	);
}
