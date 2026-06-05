import fallbackCatImage from '../assets/kingstonbild.jpeg'

const CAT_API_BREEDS_URL = 'https://api.thecatapi.com/v1/breeds'
const CAT_API_IMAGE_CDN_URL = 'https://cdn2.thecatapi.com/images'
const PLACEHOLDER_IMAGE = fallbackCatImage
let cachedCats = null

// Generate a fake catalog price inside the requested range.
function createRandomPrice() {
	return Math.floor(Math.random() * 4001) + 3000
}

function createBreedImageUrl(referenceImageId) {
	if (!referenceImageId) {
		return PLACEHOLDER_IMAGE
	}

	// The breeds API gives us an image id, so we build the CDN image URL from it.
	return `${CAT_API_IMAGE_CDN_URL}/${referenceImageId}.jpg`
}

function mapBreedToCat(breed) {
	const years = breed.life_span ? `${breed.life_span} years` : 'Unknown age'

	// Convert the raw API breed data into the fields the UI expects.
	return {
		id: breed.id,
		name: breed.name,
		breed: breed.name,
		age: years,
		price: createRandomPrice(),
		image: createBreedImageUrl(breed.reference_image_id),
		description:
			breed.description ||
			`A lovely ${breed.name} cat with a unique personality.`,
	}
}

export async function fetchCats() {
	if (cachedCats) {
		// Reuse the loaded cats so the app does not fetch them again on every render.
		return cachedCats
	}

	const response = await fetch(CAT_API_BREEDS_URL)

	if (!response.ok) {
		throw new Error('Failed to fetch cat breeds')
	}

	const breeds = await response.json()

	cachedCats = breeds.map((breed) => mapBreedToCat(breed))

	return cachedCats
}
