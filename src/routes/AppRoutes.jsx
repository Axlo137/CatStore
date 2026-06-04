import { Navigate, Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import Cats from '../pages/Cats'
import CatDetails from '../pages/CatDetails'
import Checkout from '../pages/Checkout'
import Contact from '../pages/Contact'
import Home from '../pages/Home'

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/cats" element={<Cats />} />
			<Route path="/cats/:catId" element={<CatDetails />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/checkout" element={<Checkout />} />
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	)
}

export default AppRoutes
