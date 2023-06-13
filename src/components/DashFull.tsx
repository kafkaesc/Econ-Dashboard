import DashBox from './DashBox';

export default function DashFull({ title, children }: any) {
	return (
		<div className="w-full">
			<DashBox>
				{title && <h3>{title}</h3>}
				<p>{children}</p>
			</DashBox>
		</div>
	);
}
