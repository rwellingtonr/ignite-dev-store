import { z } from 'zod'
import data from '../data.json'

type Properties = {
	params: {
		slug: string
	}
}

export async function GET(_request: Request, { params }: Properties) {
	const slug = z.string().parse(params.slug)

	await new Promise((r) => setTimeout(r, 1000))
	const product = data.products.find((product) => product.slug === slug)

	if (!product) {
		return Response.json({ message: 'Product not found' }, { status: 404 })
	}

	return Response.json(product)
}
