import { api } from '@/app/data/api'
import type { Product } from '@/contracts/product'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

type SearchProps = {
	searchParams: {
		q: string
	}
}

const fetchSearch = async (query: string) => {
	const result = await api<Product[]>(`/products/search?q=${query}`)
	return result
}

export default async function Search({ searchParams }: SearchProps) {
	if (!searchParams?.q) redirect('/')

	const products = await fetchSearch(searchParams.q)

	return (
		<div className="flex flex-col gap-4">
			<p className="text-sm">
				Resultados para: <span className="font-semibold">{searchParams?.q}</span>
			</p>

			<div className="grid grid-cols-3 gap-6">
				{products?.map((product) => (
					<Link
						key={product.image}
						className={`group relative grid place-items-center overflow-hidden rounded-lg bg-zinc-900`}
						href={`product/${product.slug}`}
					>
						<Image
							src={product.image}
							width={480}
							height={480}
							quality={100}
							alt={product.description}
							className="transition-transform duration-500 group-hover:scale-105"
						/>

						<div className="absolute bottom-10 right-10 flex h-12 max-w-72 items-center  gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
							<span className="truncate">{product.title}</span>
							<span className="grid h-full place-items-center rounded-full bg-violet-500 px-4 font-semibold">
								{product.price.toLocaleString('pt-BR', {
									style: 'currency',
									currency: 'BRL',
									minimumFractionDigits: 0,
									maximumFractionDigits: 0,
								})}
							</span>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}
