import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { styled } from '../stitches.config'

const StyledSeparator = styled(SeparatorPrimitive.Root, {
	backgroundColor: '#656661',
	'&[data-orientation=horizontal]': { height: 2, width: '100%' },
	'&[data-orientation=vertical]': { height: '100%', width: 2 }
})

export const Header = styled('div', {
	display: 'flex'
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
export const Text = styled('p', {
	margin: 0
})

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Skeleton Praxis</title>
				<meta name='description' content='Skeleton Praxis Homepage' />
				<link rel='icon' href={'/favicon.ico'} />
			</Head>

			<Header>
				<Image src='/HomeSkeleton.jpg' width={140} height={240} alt={'skeleton logo'} />
				<HeaderTextContent>
					<h1>Skeleton Praxis</h1>
					<Separator
						decorative
						orientation='horizontal'
						css={{ margin: '15px 0' }}
					/>
					<div style={{ display: 'flex' }}>
						<Text>Games</Text>
						<Separator
							decorative
							orientation='vertical'
							css={{ margin: '0 15px' }}
						/>
						<Text>Blog</Text>
						<Separator
							decorative
							orientation='vertical'
							css={{ margin: '0 15px' }}
						/>
						<Text>About</Text>
					</div>
				</HeaderTextContent>
			</Header>
		</div>
	)
}

export default Home
