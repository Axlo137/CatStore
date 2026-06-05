import { Link } from 'react-router-dom'
import fallbackCatImage from '../assets/kingstonbild.jpeg'
import { formatCurrency } from '../utils/formatCurrency'

function CatCard({ cat, onAddToCart }) {
	return (
		<article className="cat-card">
			<img
				src={cat.image}
				alt={cat.name}
				className="cat-card-image"
				onError={(event) => {
					event.currentTarget.onerror = null
					event.currentTarget.src = fallbackCatImage
				}}
			/>
			<div className="cat-card-content">
				<h3>{cat.name}</h3>
				<p>{cat.breed}</p>
				<p className="cat-meta">{cat.age}</p>
				<p className="cat-price">{formatCurrency(cat.price)}</p>
			</div>
			<div className="cat-card-actions">
				<Link to={`/cats/${cat.id}`} className="btn btn-secondary">
					View
				</Link>
				<button type="button" className="btn" onClick={() => onAddToCart(cat)}>
					Add to cart
				</button>
			</div>
		</article>
	)
}

export default CatCard
