import '../styles/tufte.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import Head from 'next/head'

function SkeletonPraxisHome({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<title>Skeleton Praxis</title>
				<meta name='description' content='Skeleton Praxis Homepage' />
				<link rel='icon' href={'/favicon.ico'} />
			</Head>
			<article>
				<h1><Link href={'/'}>Skeleton Praxis</Link></h1>
				<p>
					{/*<Link href={'/games'}>Games</Link> |{' '}*/}
					<Link href={'/blog'}>Blog</Link> |{' '}
					<Link href={'/about'}>About</Link>
				</p>
				<Component {...pageProps} />
			</article>
		</div>

	)
}

export default SkeletonPraxisHome
