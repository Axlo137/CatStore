import { useEffect, useState } from 'react'
import { fetchCats } from '../api/catApi'

function useCats() {
	const [cats, setCats] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		let isMounted = true

		async function loadCats() {
			try {
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
			isMounted = false
		}
	}, [])

	return { cats, loading, error }
}

export default useCats
