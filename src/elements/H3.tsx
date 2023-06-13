interface H3Props {
	children: any;
	className?: string;
	[props: string]: any;
}

export default function H3({ children, className, ...props }: H3Props) {
	return className ? (
		<h2 {...props} className={`mb-2 font-bold ${className}`}>
			{children}
		</h2>
	) : (
		<h2 {...props} className="mb-2 font-bold">
			{children}
		</h2>
	);
}
