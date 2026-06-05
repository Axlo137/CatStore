import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { useCart } from '../context/CartContext'
import { formatCurrency } from '../utils/formatCurrency'

function Cart() {
	const { cartItems, subtotal, updateQuantity, removeFromCart } = useCart()

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
				<Link to="/checkout" className="btn">
					Go to checkout
				</Link>
			</div>
		</section>
	)
}

export default Cart
