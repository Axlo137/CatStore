import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatCurrency } from '../utils/formatCurrency'

function Checkout() {
	// Track whether the order form has been submitted.
	const [ordered, setOrdered] = useState(false)
	const { cartItems, subtotal, clearCart } = useCart()
	const navigate = useNavigate()

	// Block direct access to checkout when the cart is empty.
	if (cartItems.length === 0 && !ordered) {
		return <Navigate to="/cart" replace />
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		// Clear the cart once the order is placed.
		clearCart()
		setOrdered(true)
	}

	if (ordered) {
		return (
			<section className="page">
				<h1>Order confirmed</h1>
				<p className="state-message">Thanks for choosing CatStore.</p>
				<button type="button" className="btn" onClick={() => navigate('/')}>
					Back to home
				</button>
			</section>
		)
	}

	return (
		<section className="page">
			<h1>Checkout</h1>
			<p className="state-message">Total: {formatCurrency(subtotal)}</p>

			<form className="checkout-form" onSubmit={handleSubmit}>
				<label htmlFor="name">Full name</label>
				<input id="name" type="text" required />

				<label htmlFor="email">Email</label>
				<input id="email" type="email" required />

				<label htmlFor="address">Address</label>
				<input id="address" type="text" required />

				<button type="submit" className="btn">
					Place order
				</button>
			</form>
		</section>
	)
}

export default Checkout
