import { useMemo, useState } from 'react'
import CatCard from '../components/CatCard'
import SearchBar from '../components/SearchBar'
import { useCart } from '../context/CartContext'
import useCats from '../hooks/useCats'

const CATS_PER_PAGE = 10

function Cats() {
	const [query, setQuery] = useState('')
	const [currentPage, setCurrentPage] = useState(1)
	const { cats, loading, error } = useCats()
	const { addToCart } = useCart()

	const filteredCats = useMemo(() => {
		if (!query.trim()) {
			return cats
		}

		const normalized = query.toLowerCase()
		return cats.filter(
			(cat) =>
				cat.name.toLowerCase().includes(normalized) ||
				cat.breed.toLowerCase().includes(normalized),
		)
	}, [cats, query])

	const totalPages = Math.max(1, Math.ceil(filteredCats.length / CATS_PER_PAGE))
	const safePage = Math.min(currentPage, totalPages)
	const startIndex = (safePage - 1) * CATS_PER_PAGE
	const pagedCats = filteredCats.slice(startIndex, startIndex + CATS_PER_PAGE)

	const handleSearch = (value) => {
		setQuery(value)
		setCurrentPage(1)
	}

	return (
		<section className="page">
			<div className="hero-card">
				<p className="eyebrow">Cats catalog</p>
				<h1>Find your match</h1>
				<p>Browse all breeds with 10 cats per page.</p>
			</div>

			<SearchBar value={query} onChange={handleSearch} />

			{loading && <p className="state-message">Loading cats...</p>}
			{error && <p className="state-message error">{error}</p>}

			{!loading && !error && (
				<>
					<div className="catalog-headline">
						<p>
							Showing {pagedCats.length} of {filteredCats.length} cats
						</p>
						<p>
							Page {safePage} of {totalPages}
						</p>
					</div>

					<div className="cat-grid">
						{pagedCats.map((cat) => (
							<CatCard key={cat.id} cat={cat} onAddToCart={addToCart} />
						))}
					</div>

					{filteredCats.length === 0 && (
						<p className="state-message">No cats match your search.</p>
					)}

					{filteredCats.length > 0 && (
						<div className="pagination">
							<button
								type="button"
								className="btn btn-secondary"
								onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
								disabled={safePage === 1}
							>
								Previous
							</button>
							<button
								type="button"
								className="btn btn-secondary"
								onClick={() =>
									setCurrentPage((page) => Math.min(totalPages, page + 1))
								}
								disabled={safePage === totalPages}
							>
								Next
							</button>
						</div>
					)}
				</>
			)}
		</section>
	)
}

export default Cats
