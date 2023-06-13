interface AProps {
	children: any;
	className?: string;
	href: string;
	[props: string]: any;
}

export default function A({ children, className, href, ...props }: AProps) {
	return className ? (
		<a
			{...props}
			className={`text-blue-700 underline hover:text-blue-800 ${className}`}
			href={href}
		>
			{children}
		</a>
	) : (
		<a
			{...props}
			className="text-blue-700 underline hover:text-blue-800"
			href={href}
		>
			{children}
		</a>
	);
}
