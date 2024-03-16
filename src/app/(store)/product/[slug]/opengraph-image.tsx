import { env } from '@/app/config/env'
import { api } from '@/app/data/api'
import type { Product } from '@/contracts/product'
import { ImageResponse } from 'next/og'
import { zinc } from 'tailwindcss/colors'

type ImageMetadataProps = {
	params: {
		slug: string
	}
}

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'About Acme'
export const size = {
	width: 1200,
	height: 630,
}

export const contentType = 'image/png'

const fetchProduct = async (slug: string) => {
	const response = await api<Product>(`/products/${slug}`, {
		next: {
			revalidate: 60 * 60,
		},
	})
	return response
}

// Image generation
export default async function ImageMetadata({ params }: ImageMetadataProps) {
	const product = await fetchProduct(params.slug)

	const productImageUrl = new URL(product.image, env.APP_URL).toString()

	return new ImageResponse(
		(
			<div
				style={{
					backgroundColor: zinc[950],
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<img src={productImageUrl} alt="" style={{ width: '100%' }} />
			</div>
		),
		{
			...size,
		},
	)
}
