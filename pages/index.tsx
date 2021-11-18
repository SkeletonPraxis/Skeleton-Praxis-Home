import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { styled } from '../stitches.config'
import { useRouter } from 'next/router'

const StyledSeparator = styled(SeparatorPrimitive.Root, {
	backgroundColor: '#656661',
	'&[data-orientation=horizontal]': { height: 2, width: '100%' },
	'&[data-orientation=vertical]': { height: '100%', width: 2 }
})

export const StyledHeader = styled('article', {
	display: 'flex',
	'& section': {
		display: 'flex'
	}
})
export const HeaderTextContent = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	marginLeft: '50px',
	justifyContent: 'end',
	'& h1': {
		margin: 0
	}
})
export const Separator = StyledSeparator
export const Link = styled('p', {
	margin: 0,
	'&:hover': {
		cursor: 'pointer',
		textDecoration: 'underline'
	}
})

export const Header: NextPage = () => {
	const router = useRouter()

	return (
		<StyledHeader>
			<section>
				<Image
					src='/HomeSkeleton.jpg'
					width={140}
					height={240}
					alt={'skeleton logo'}
				/>
				<HeaderTextContent>
					<h1>Skeleton Praxis</h1>
					<Separator
						decorative
						orientation='horizontal'
						css={{ margin: '15px 0' }}
					/>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center'
						}}
					>
						<Link
							onClick={() => {
								router.push('/games')
							}}
						>
							Games
						</Link>
						<Separator
							decorative
							orientation='vertical'
							css={{ margin: '0 15px' }}
						/>
						<Link
							onClick={() => {
								router.push('/blog')
							}}
						>
							Blog
						</Link>
						<Separator
							decorative
							orientation='vertical'
							css={{ margin: '0 15px' }}
						/>
						<Link
							onClick={() => {
								router.push('/about')
							}}
						>
							About
						</Link>
					</div>
				</HeaderTextContent>
			</section>
		</StyledHeader>
	)
}

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Skeleton Praxis</title>
				<meta name='description' content='Skeleton Praxis Homepage' />
				<link rel='icon' href={'/favicon.ico'} />
			</Head>

			<Header />

			{/*Most recent blog posts*/}
			<article>
				<h2>Post Title</h2>
				<p className={'subtitle'}>November 18, 2021</p>
				<section>
					<p>
						Tufte CSS provides tools to style web articles using the
						ideas{' '}
						<strong>demonstrated by Edward Tufte’s books</strong>{' '}
						and handouts. Tufte’s style is known for its simplicity,
						extensive use of sidenotes, tight integration of
						graphics with text, and carefully chosen typography.
					</p>
					<p>
						Tufte CSS provides tools to style web articles using the
						ideas demonstrated by Edward Tufte’s books and handouts.
						Tufte’s style is known for its simplicity, extensive use
						of sidenotes, tight integration of graphics with text,
						and carefully chosen typography.
					</p>
				</section>
				<section>
					<p>
						Tufte CSS provides tools to style web articles using the
						ideas demonstrated by Edward Tufte’s books and handouts.
						Tufte’s style is known for its simplicity, extensive use
						of sidenotes, tight integration of graphics with text,
						and carefully chosen typography.
					</p>
				</section>
			</article>
		</div>
	)
}

export default Home
