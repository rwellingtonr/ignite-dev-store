import type { NextRequest } from 'next/server'
import data from '../data.json'
import { z } from 'zod'

export async function GET(request: NextRequest) {
	await new Promise((r) => setTimeout(r, 1000))

	const { searchParams } = request.nextUrl

	const query = z.string().parse(searchParams.get('q'))

	const queryLowerCase = query.toLocaleLowerCase()

	const products = data.products.filter(({ title }) => {
		return title.toLocaleLowerCase().includes(queryLowerCase)
	})

	return Response.json(products)
}
