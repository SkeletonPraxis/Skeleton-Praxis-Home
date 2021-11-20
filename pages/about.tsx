import { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
const About: NextPage = () => {
	return (
		<section>
			<Head>
				<title>Skeleton Praxis - About</title>
			</Head>
			<h2>About</h2>
			<p>Skeleton Praxis a single person game studio targeting PC/Mac/Linux/Web platforms.</p>
			<p>Currently working on <Link href={'https://twitter.com/WMEGame'}>WME</Link>, and another unannounced project.</p>

			<h3>Contact</h3>
			<p>Please don't hesitate to reach out if you'd like to collaborate on a project, have any business inquiries, or just want to chat.</p>
			<p>E-mail: skeletonpraxis@pm.me</p>
			<p><Link href={'https://twitter.com/SkeletonPraxis'}>Twitter</Link> | <Link href={'https://github.com/SkeletonPraxis'}>Github</Link></p>
		</section>
	)
}

export default About
