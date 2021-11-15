import '../styles/tufte.min.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function SkeletonPraxisHome({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

export default SkeletonPraxisHome
