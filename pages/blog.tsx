import { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Blog: NextPage = () => {
	return (
		<section>
			<Head>
				<title>Skeleton Praxis - Blog</title>
			</Head>
			<h2>Launch</h2>
			<h3>November 20th, 2021</h3>
			<p>
				Hello world! It is nice having a place to blog about game
				development and writing. Skeleton Praxis is currently a solo
				person endeavor, but I aim for this space to be a place where
				any team member can talk about their involvement on any project,
				and dissect their process for people to learn from.
			</p>
			<p>
				{/* eslint-disable-next-line react/no-unescaped-entities */}
				On a personal note, I'm just happy to have finally launched this
				site. I was reminded of{' '}
				<Link href={'https://edwardtufte.github.io/tufte-css/'}>
					Tufte CSS
				</Link>{' '}
				thanks to a friend of mine, and it lit a flame in me to
				prioritize getting this site out the door. Why? Because this is
				a nice looking style for a website! Seriously, just look at how
				clean the margins and fonts are, and the responsive behavior
				of all of it.
			</p>
			<p>
				{/* eslint-disable-next-line react/no-unescaped-entities */}
				Currently, I'm heads down on{' '}
				<Link href={'https://twitter.com/WMEGame'}>WME</Link> and a few
				{/* eslint-disable-next-line react/no-unescaped-entities */}
				&nbsp;other games, so I don't have too much to talk about at the
				moment. I have been practicing a few different game development
				{/* eslint-disable-next-line react/no-unescaped-entities */}
				&nbsp;practices as of late, but I'm still in the process of writing a
				post about that.
			</p>
			<p>
				I hope to share some exciting information about the game
				{/* eslint-disable-next-line react/no-unescaped-entities */}
				&nbsp;projects I'm working on, and I'm excited to share it with the
				rest of the world. Stay sane everyone.
			</p>
		</section>
	)
}

export default Blog
