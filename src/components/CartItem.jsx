function CartItem({ item, onIncrease, onDecrease, onRemove }) {
	return (
		<article className="cart-item">
			<img src={item.image} alt={item.name} className="cart-item-image" />

			<div className="cart-item-content">
				<h3>{item.name}</h3>
				<p>{item.breed}</p>
				<p>${item.price}</p>
			</div>

			<div className="cart-item-controls">
				<button type="button" onClick={onDecrease} aria-label={`Decrease ${item.name}`}>
					-
				</button>
				<span>{item.quantity}</span>
				<button type="button" onClick={onIncrease} aria-label={`Increase ${item.name}`}>
					+
				</button>
				<button type="button" className="remove" onClick={onRemove}>
					Remove
				</button>
			</div>
		</article>
	)
}

export default CartItem
