import fallbackCatImage from '../assets/kingstonbild.jpeg'

const CAT_API_BREEDS_URL = 'https://api.thecatapi.com/v1/breeds'
const CAT_API_IMAGE_CDN_URL = 'https://cdn2.thecatapi.com/images'
const PLACEHOLDER_IMAGE = fallbackCatImage
let cachedCats = null

function createRandomPrice() {
	return Math.floor(Math.random() * 4001) + 3000
}

function createBreedImageUrl(referenceImageId) {
	if (!referenceImageId) {
		return PLACEHOLDER_IMAGE
	}

	return `${CAT_API_IMAGE_CDN_URL}/${referenceImageId}.jpg`
}

function mapBreedToCat(breed) {
	const years = breed.life_span ? `${breed.life_span} years` : 'Unknown age'

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
