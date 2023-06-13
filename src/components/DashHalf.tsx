import DashBox from './DashBox';

export default function DashHalf({ title, children }: any) {
	return (
		<div className="inline-block w-full sm:w-1/2">
			<DashBox>
				{title && <h3>{title}</h3>}
				<p>{children}</p>
			</DashBox>
		</div>
	);
}
