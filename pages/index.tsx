import type { NextPage } from 'next'

export const config = {
	unstable_runtimeJS: false
};

const Home: NextPage = () => {
	return (
		<section>
			<h2>Welcome</h2>
			<p>
				Welcome to the homepage of Skeleton Praxis! You can find my
				writing and games here.
			</p>
		</section>
	)
}

export default Home
