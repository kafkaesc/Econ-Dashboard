import P from '@/elements/P';
import H1 from '@/elements/H1';
import Link from '@/elements/Link';
import DashFull from '@/components/DashFull';
import DashHalf from '@/components/DashHalf';
import DashQuarter from '@/components/DashQuarter';

export default function Home() {
	return (
		<>
			<H1 className="text-4xl text-center">Home</H1>
			<DashFull title="Wide Data">Hello world</DashFull>
			<DashHalf title="Half Data 1">Abc</DashHalf>
			<DashHalf title="Half Data 2">Def</DashHalf>
			<DashQuarter title="Q1">Hello World</DashQuarter>
			<DashQuarter title="Q2">Hola el Mundo</DashQuarter>
			<DashHalf title="Half Data 2">Def</DashHalf>
			<P className="text-center">
				<Link href="/About">About</Link>
			</P>
		</>
	);
}
