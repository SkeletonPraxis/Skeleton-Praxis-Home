import { NextPage } from 'next'
import Head from 'next/head'
import { Header } from './index'

const Games: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Skeleton Praxis - Games</title>
				<meta name='description' content='Skeleton Praxis Homepage' />
				<link rel='icon' href={'/favicon.ico'} />
			</Head>

			<Header />
		</div>
	)
}

export default Games
