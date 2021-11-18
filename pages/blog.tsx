import { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import { Header } from './index'

const Blog: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Skeleton Praxis - Blog</title>
				<meta name='description' content='Skeleton Praxis Homepage' />
				<link rel='icon' href={'/favicon.ico'} />
			</Head>

			<Header />
		</div>
	)
}

export default Blog
