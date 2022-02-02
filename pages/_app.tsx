import '../styles/tufte.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import Head from 'next/head'

function SkeletonPraxisHome({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<meta charSet='UTF-8' />
				<title>Skeleton Praxis</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href={'/favicon.ico'} />
				<link rel='icon' href={'/favicon.svg'} type='image/svg+xml' />
				<meta
					name='description'
					content='Skeleton Praxis Game Studio Homepage'
				/>
				<link rel="shortcut icon" href={'/favicon.ico'} />

				{/*Facebook OpenGraph meta tags*/}
				<meta property='og:title' content='Skeleton Praxis' />
				<meta property='og:type' content='website' />
				<meta
					property='og:url'
					content='https://www.skeletonpraxis.com/'
				/>
				<meta
					property='og:image'
					content='https://skeletonpraxis.com/HomeSkeleton.jpg'
				/>
				<meta
					property='og:description'
					content='Skeleton Praxis Game Studio Homepage'
				/>
				<meta
					property='og:image:alt'
					content='Skeleton Praxis Mascot'
				/>
				<meta property="og:site_name" content="Skeleton Praxis" />

				{/*Twitter meta tags*/}
				<meta name='twitter:title' content='Skeleton Praxis' />
				<meta
					name='twitter:description'
					content='Skeleton Praxis Game Studio Homepage'
				/>
				<meta
					name='twitter:image'
					content='https://skeletonpraxis.com/HomeSkeleton.jpg'
				/>
				<meta name='twitter:card' content='summary' />
				<meta name='twitter:creator' content='@SkeletonPraxis' />
				<meta name='twitter:site' content='@SkeletonPraxis' />

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
