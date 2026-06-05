/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
	// Store every cat the user has added to the cart.
	const [cartItems, setCartItems] = useState([])

	const addToCart = (cat) => {
		setCartItems((current) => {
			const exists = current.find((item) => item.id === cat.id)
			if (exists) {
				// Increase the quantity if the same cat is already in the cart.
				return current.map((item) =>
					item.id === cat.id ? { ...item, quantity: item.quantity + 1 } : item,
				)
			}
			// Add a new cart row for cats that are not in the cart yet.
			return [...current, { ...cat, quantity: 1 }]
		})
	}

	const updateQuantity = (id, quantity) => {
		if (quantity <= 0) {
			// Remove the item when the quantity goes to zero.
			setCartItems((current) => current.filter((item) => item.id !== id))
			return
		}

		setCartItems((current) =>
			current.map((item) => (item.id === id ? { ...item, quantity } : item)),
		)
	}

	const removeFromCart = (id) => {
		setCartItems((current) => current.filter((item) => item.id !== id))
	}

	const clearCart = () => {
		setCartItems([])
	}

	// Count the total number of cats across all cart rows.
	const itemCount = useMemo(
		() => cartItems.reduce((total, item) => total + item.quantity, 0),
		[cartItems],
	)

	// Calculate the full cart price for the summary and checkout pages.
	const subtotal = useMemo(
		() => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
		[cartItems],
	)

	const value = {
		cartItems,
		itemCount,
		subtotal,
		addToCart,
		updateQuantity,
		removeFromCart,
		clearCart,
	}

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
	const context = useContext(CartContext)
	if (!context) {
		throw new Error('useCart must be used within a CartProvider')
	}
	return context
}
