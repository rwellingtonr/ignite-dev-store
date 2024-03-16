import data from '../data.json'

export async function GET() {
	await new Promise((r) => setTimeout(r, 1000))
	const featured = data.products.filter(({ featured }) => featured)

	return Response.json(featured)
}
