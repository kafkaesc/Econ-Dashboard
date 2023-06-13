import A from '@/elements/A';
import H1 from '@/elements/H1';
import Link from '@/elements/Link';
import P from '@/elements/P';

export default function About() {
	return (
		<>
			<H1 className="text-4xl text-center">About</H1>
			<P className="text-center">Built by Jared Hettinger</P>
			<P className="text-center">
				Return <Link href="/">home</Link>
			</P>
		</>
	);
}
