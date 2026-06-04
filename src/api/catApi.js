import fallbackCatImage from '../assets/kingstonbild.jpeg'

const CAT_API_BREEDS_URL = 'https://api.thecatapi.com/v1/breeds'
const CAT_API_IMAGE_DETAILS_URL = 'https://api.thecatapi.com/v1/images'
const PLACEHOLDER_IMAGE = fallbackCatImage
let cachedCats = null

function createPriceFromBreedId(id) {
	const total = id
		.split('')
		.reduce((sum, char) => sum + char.charCodeAt(0), 0)
	return 350 + (total % 500)
}

function mapBreedToCat(breed) {
	const years = breed.life_span ? `${breed.life_span} years` : 'Unknown age'

	return {
		id: breed.id,
		name: breed.name,
		breed: breed.name,
		age: years,
		price: createPriceFromBreedId(breed.id),
		image: PLACEHOLDER_IMAGE,
		description:
			breed.description ||
			`A lovely ${breed.name} cat with a unique personality.`,
	}
}

async function resolveBreedImageUrl(referenceImageId) {
	if (!referenceImageId) {
		return PLACEHOLDER_IMAGE
	}

	try {
		const response = await fetch(
			`${CAT_API_IMAGE_DETAILS_URL}/${referenceImageId}`,
		)
		if (!response.ok) {
			return PLACEHOLDER_IMAGE
		}

		const image = await response.json()
		return image.url || PLACEHOLDER_IMAGE
	} catch {
		return PLACEHOLDER_IMAGE
	}
}

export async function fetchCats() {
	if (cachedCats) {
		return cachedCats
	}

	const response = await fetch(CAT_API_BREEDS_URL)

	if (!response.ok) {
		throw new Error('Failed to fetch cat breeds')
	}

	const breeds = await response.json()
	const imageUrls = await Promise.all(
		breeds.map((breed) => resolveBreedImageUrl(breed.reference_image_id)),
	)

	cachedCats = breeds.map((breed, index) => ({
		...mapBreedToCat(breed),
		image: imageUrls[index],
	}))

	return cachedCats
}
