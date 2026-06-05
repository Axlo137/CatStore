import { useEffect, useState } from 'react'
import { fetchCats } from '../api/catApi'

function useCats() {
	const [cats, setCats] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		// Prevent state updates if the page unmounts before the fetch finishes.
		let isMounted = true

		async function loadCats() {
			try {
				// Load the mapped cat data from the API helper.
				const data = await fetchCats()
				if (isMounted) {
					setCats(data)
				}
			} catch {
				if (isMounted) {
					setError('Could not load cats right now. Please try again.')
				}
			} finally {
				if (isMounted) {
					setLoading(false)
				}
			}
		}

		loadCats()

		return () => {
			// Mark the effect as inactive during cleanup.
			isMounted = false
		}
	}, [])

	return { cats, loading, error }
}

export default useCats
