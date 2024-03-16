import { api } from '@/app/data/api'
import { AddToCartComponent } from '@/components/AddToCartButton'
import type { Product } from '@/contracts/product'
import { Metadata } from 'next'
import Image from 'next/image'

type ProductPageProps = {
	params: {
		slug: string
	}
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
	const product = await fetchProduct(params.slug)
	return {
		title: product.title,
	}
}

const fetchProduct = async (slug: string) => {
	const response = await api<Product>(`/products/${slug}`, {
		next: {
			revalidate: 60 * 60,
		},
	})
	return response
}

export async function generateStaticParams() {
	const result = await api<Product[]>('/products/featured')
	return result.map(({ slug }) => ({ slug }))
}

export default async function ProductPage({ params }: ProductPageProps) {
	const product = await fetchProduct(params.slug)

	return (
		<main className="relative grid max-h-[860px] grid-cols-3">
			<div className="col-span-2 overflow-hidden">
				<Image src={product.image} alt="" width={1000} height={1000} quality={100} className="" />
			</div>

			<article className="flex flex-col justify-center px-12">
				<h1 className="text-3xl font-bold leading-tight ">{product.title}</h1>
				<p className="mt-2 leading-relaxed text-zinc-400">{product.description}</p>

				<div className="mt-8 flex items-center gap-3">
					<span className="grid place-items-center rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
						{product.price.toLocaleString('pt-BR', {
							style: 'currency',
							currency: 'BRL',
							minimumFractionDigits: 0,
							maximumFractionDigits: 0,
						})}
					</span>
					<span className="text-sm text-zinc-400">
						Em 12x s/ juros de{' '}
						{(product.price / 12).toLocaleString('pt-BR', {
							style: 'currency',
							currency: 'BRL',
						})}
					</span>
				</div>
				<div className="mt-8 space-y-4">
					<span className="block font-serif">Tamanhos</span>

					<div className="flex items-center gap-2">
						<button
							className="grid h-9 w-14 place-items-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
							type="button"
						>
							P
						</button>
						<button
							className="grid h-9 w-14 place-items-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
							type="button"
						>
							M
						</button>
						<button
							className="grid h-9 w-14 place-items-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
							type="button"
						>
							G
						</button>
						<button
							className="grid h-9 w-14 place-items-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
							type="button"
						>
							GG
						</button>
					</div>
					<AddToCartComponent productId={product.id} />
				</div>
			</article>
		</main>
	)
}
