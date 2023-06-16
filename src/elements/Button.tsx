interface ButtonProps {
	children: string;
	className?: string;
	disabled?: boolean;
	[props: string]: any;
}

export default function Button({
	children,
	className,
	disabled,
	...props
}: ButtonProps) {
	return disabled ? (
		className ? (
			<button
				{...props}
				className={`px-2 py-1 border border-black ${className}`}
				disabled={true}
			>
				{children}
			</button>
		) : (
			<button
				{...props}
				className="px-2 py-1 border border-black"
				disabled={true}
			>
				{children}
			</button>
		)
	) : className ? (
		<button {...props} className={`px-2 py-1 border border-black ${className}`}>
			{children}
		</button>
	) : (
		<button {...props} className="px-2 py-1 border border-black">
			{children}
		</button>
	);
}
