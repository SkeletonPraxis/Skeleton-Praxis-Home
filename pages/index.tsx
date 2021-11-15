import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Skeleton Praxis</title>
				<meta name='description' content='Skeleton Praxis Homepage' />
				<link rel='icon' href={'/favicon.ico'} />
			</Head>

			<div>
				<Image src='/HomeSkeleton.jpg' width={140} height={240}/>
				<p>thi;asdf;sajlsaojwef  psjfsdpsd i spojpispfsdpoi do dpisdospijwefjao </p>
			</div>
		</div>
	)
}

export default Home
