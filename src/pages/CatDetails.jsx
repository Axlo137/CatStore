import { Link, useParams } from 'react-router-dom'
import fallbackCatImage from '../assets/kingstonbild.jpeg'
import { useCart } from '../context/CartContext'
import useCats from '../hooks/useCats'
import { formatCurrency } from '../utils/formatCurrency'

function CatDetails() {
	const { catId } = useParams()
	const { cats, loading, error } = useCats()
	const { addToCart } = useCart()

	if (loading) {
		return <p className="state-message">Loading cat details...</p>
	}

	if (error) {
		return <p className="state-message error">{error}</p>
	}

	const cat = cats.find((item) => item.id === catId)

	if (!cat) {
		return (
			<section className="page">
				<p className="state-message">Cat not found.</p>
				<Link to="/cats" className="btn btn-secondary">
					Back to catalog
				</Link>
			</section>
		)
	}

	return (
		<section className="page details-layout">
			<img
				src={cat.image}
				alt={cat.name}
				className="details-image"
				onError={(event) => {
					event.currentTarget.onerror = null
					event.currentTarget.src = fallbackCatImage
				}}
			/>

			<div className="details-content">
				<p className="eyebrow">{cat.breed}</p>
				<h1>{cat.name}</h1>
				<p>{cat.description}</p>
				<p>Origin: {cat.origin}</p>
				<p>Age: {cat.age}</p>
				<p className="cat-price">{formatCurrency(cat.price)}</p>

				<div className="details-actions">
					<button type="button" className="btn" onClick={() => addToCart(cat)}>
						Add to cart
					</button>
					<Link to="/cats" className="btn btn-secondary">
						Continue browsing
					</Link>
				</div>
			</div>
		</section>
	)
}

export default CatDetails
