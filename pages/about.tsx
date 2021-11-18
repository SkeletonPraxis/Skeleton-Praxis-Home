import { NextPage } from 'next'
import Head from 'next/head'
import { Header } from './index'

const About: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Skeleton Praxis - About</title>
				<meta name='description' content='Skeleton Praxis Homepage' />
				<link rel='icon' href={'/favicon.ico'} />
			</Head>

			<Header />
		</div>
	)
}

export default About
