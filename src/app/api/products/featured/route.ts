import data from '../data.json'

export async function GET() {
	const featured = data.products.filter(({ featured }) => featured)

	return Response.json(featured)
}
