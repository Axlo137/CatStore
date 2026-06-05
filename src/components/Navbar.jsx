import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Navbar() {
	const { itemCount } = useCart()

	return (
		<header className="navbar">
			<div className="navbar-inner">
				<Link to="/" className="brand">
					CatStore
				</Link>

				<nav className="nav-links" aria-label="Main navigation">
					<NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
						Home
					</NavLink>
					<NavLink
						to="/cats"
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						Cats
					</NavLink>
					<NavLink
						to="/contact"
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						Contact
					</NavLink>
					<NavLink
						to="/cart"
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						Cart ({itemCount})
					</NavLink>
				</nav>
			</div>
		</header>
	)
}

export default Navbar
