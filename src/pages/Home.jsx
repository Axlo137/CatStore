import { Link } from 'react-router-dom'

function Home() {
	return (
		<section className="page">
			<div className="hero-card hero-home">
				<p className="eyebrow">Welcome to CatStore</p>
				<h1>Premium cats in a playful purple world</h1>
				<p>
					Discover unique breeds, read their personality profiles, and build your cart
					before checkout.
				</p>
				<div className="hero-actions">
					<Link to="/cats" className="btn">
						Browse cats
					</Link>
					<Link to="/contact" className="btn btn-secondary">
						Contact us
					</Link>
				</div>
			</div>

			<div className="home-panels">
				<article className="panel">
					<h2>Explore curated breeds</h2>
					<p>
						Our cats come from The Cat API and are presented with details, photos,
						and pricing.
					</p>
				</article>
				<article className="panel">
					<h2>Shop with pagination</h2>
					<p>
						The catalog is split into easy-to-browse pages with 10 cats per page.
					</p>
				</article>
				<article className="panel">
					<h2>Need help?</h2>
					<p>
						Use the contact page for adoption questions, support, or partnership
						requests.
					</p>
				</article>
			</div>
		</section>
	)
}

export default Home
