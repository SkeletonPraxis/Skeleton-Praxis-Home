import '../styles/tufte.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import Head from 'next/head'

function SkeletonPraxisHome({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<meta charSet='UTF-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<title>Skeleton Praxis</title>
				<link rel='icon' href={'/favicon.ico'} />
				<link rel='icon' href={'/favicon.svg'} type='image/svg+xml' />
				<meta
					name='description'
					content='Skeleton Praxis Game Development Studio'
				/>

				<meta property='og:title' content='Skeleton Praxis' />
				<meta
					property='og:description'
					content='Skeleton Praxis Game Development Studio'
				/>
				<meta property='og:image' content='HomeSkeleton.jpg' />
				<meta
					property='og:image:alt'
					content='Skeleton Praxis Mascot'
				/>
				<meta property='og:locale' content='en_GB' />
				<meta property='og:type' content='website' />
				<meta name='twitter:card' content='summary' />
				<meta
					property='og:url'
					content='https://www.mywebsite.com/page'
				/>
				<link rel='canonical' href='https://www.skeletonpraxis.com/' />

				<link rel='apple-touch-icon' href={'/skull.png'} />
				<link rel='manifest' href={'/my.webmanifest'} />
			</Head>
			<article>
				<h1>
					<Link href={'/'}>Skeleton Praxis</Link>
				</h1>
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
