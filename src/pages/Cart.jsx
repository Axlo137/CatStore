import { useState } from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { useCart } from '../context/CartContext'
import { formatCurrency } from '../utils/formatCurrency'

function Cart() {
	const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
	const { cartItems, subtotal, updateQuantity, removeFromCart, clearCart } = useCart()

	const handleOrderSubmit = (event) => {
		event.preventDefault()
		setIsOrderModalOpen(false)
		clearCart()
		alert('Order confirmed! Thank you for your purchase.')
	}

	// Show an empty state until the user adds at least one cat.
	if (cartItems.length === 0) {
		return (
			<section className="page">
				<h1>Your cart is empty</h1>
				<p className="state-message">Pick a cat from our catalog to get started.</p>
				<Link to="/cats" className="btn">
					Browse cats
				</Link>
			</section>
		)
	}

	return (
		<section className="page">
			<h1>Your cart</h1>

			<div className="cart-list">
				{cartItems.map((item) => (
					// Each cart row can change quantity or be removed entirely.
					<CartItem
						key={item.id}
						item={item}
						onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
						onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
						onRemove={() => removeFromCart(item.id)}
					/>
				))}
			</div>

			<div className="order-summary">
				<p>Subtotal: {formatCurrency(subtotal)}</p>
				<button type="button" className="btn" onClick={() => setIsOrderModalOpen(true)}>
					Order now
				</button>
			</div>

			{isOrderModalOpen && (
				<div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="order-modal-title">
					<div className="order-modal">
						<h2 id="order-modal-title">Complete your order</h2>
						<form className="checkout-form" onSubmit={handleOrderSubmit}>
							<label htmlFor="name">Full name</label>
							<input id="name" type="text" required />

							<label htmlFor="email">Email</label>
							<input id="email" type="email" required />

							<label htmlFor="address">Delivery address</label>
							<input id="address" type="text" required />

							<div className="modal-actions">
								<button type="button" className="btn btn-secondary" onClick={() => setIsOrderModalOpen(false)}>
									Cancel
								</button>
								<button type="submit" className="btn">
									Send order
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</section>
	)
}

export default Cart
