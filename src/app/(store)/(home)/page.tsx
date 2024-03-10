import { api } from '@/app/data/api'
import type { Product } from '@/contracts/product'
import Image from 'next/image'
import Link from 'next/link'

const getFeaturedProducts = async () => {
	const result = await api<Product[]>('/products/featured')
	return result
}

export default async function Home() {
	const clothes = await getFeaturedProducts()

	return (
		<main className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
			{clothes.map((clothe, index) => (
				<Link
					key={clothe.image}
					className={`group relative ${index === 0 ? 'col-span-6 row-span-6' : 'col-span-3 row-span-3'}  grid place-items-center overflow-hidden rounded-lg bg-zinc-900`}
					href={'#'}
				>
					<Image
						src={clothe.image}
						width={920}
						height={920}
						quality={100}
						alt={clothe.description}
						className="transition-transform duration-500 group-hover:scale-105"
					/>

					<div
						className={`absolute ${index === 0 ? 'bottom-28 right-28' : 'bottom-10 right-10'} flex h-12 max-w-72 items-center  gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5`}
					>
						<span className="truncate">{clothe.title}</span>
						<span className="grid h-full place-items-center rounded-full bg-violet-500 px-4 font-semibold">
							{clothe.price.toLocaleString('pt-BR', {
								style: 'currency',
								currency: 'BRL',
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
							})}
						</span>
					</div>
				</Link>
			))}
		</main>
	)
}
