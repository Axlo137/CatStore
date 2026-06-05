import { useState } from 'react'
import ReactCardFlipModule from 'react-card-flip'
import fallbackCatImage from '../assets/kingstonbild.jpeg'
import { formatCurrency } from '../utils/formatCurrency'

// Normalize the package export so the flip component works in this app setup.
const ReactCardFlip = ReactCardFlipModule.default ?? ReactCardFlipModule

function CatCard({ cat, onAddToCart }) {
	// Track which side of the card is visible.
	const [isFlipped, setIsFlipped] = useState(false)

	const handleFlip = () => {
		setIsFlipped((current) => !current)
	}

	return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" containerClassName="cat-card-flip">
			{/* Front side with the main card preview. */}
			<article className="cat-card" key="front">
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
					<button type="button" className="btn btn-secondary" onClick={handleFlip}>
						More info
					</button>
					<button type="button" className="btn" onClick={() => onAddToCart(cat)}>
						Add to cart
					</button>
				</div>
			</article>

			{/* Back side with extra breed details. */}
			<article className="cat-card cat-card-back" key="back">
				<div className="cat-card-content cat-card-back-content">
					<p className="eyebrow">Breed details</p>
					<h3>{cat.name}</h3>
					<p className="cat-description">{cat.description}</p>
					<p className="cat-meta">Breed: {cat.breed}</p>
					<p className="cat-meta">Age: {cat.age}</p>
					<p className="cat-price">{formatCurrency(cat.price)}</p>
				</div>
				<div className="cat-card-actions">
					<button type="button" className="btn btn-secondary" onClick={handleFlip}>
						Back
					</button>
					<button type="button" className="btn" onClick={() => onAddToCart(cat)}>
						Add to cart
					</button>
				</div>
			</article>
		</ReactCardFlip>
	)
}

export default CatCard
