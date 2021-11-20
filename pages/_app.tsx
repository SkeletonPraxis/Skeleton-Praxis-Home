import '../styles/tufte.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

function SkeletonPraxisHome({ Component, pageProps }: AppProps) {
	return (
		<article>
			<h1>Skeleton Praxis</h1>
			<p>
				<Link href={'/games'}>Games</Link> |{' '}
				<Link href={'/blog'}>Blog</Link> |{' '}
				<Link href={'/about'}>About</Link>
			</p>
			<Component {...pageProps} />
		</article>
	)
}

export default SkeletonPraxisHome
