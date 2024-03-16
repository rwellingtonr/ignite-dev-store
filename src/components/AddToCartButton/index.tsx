'use client'

import { useCartContext } from '@/context/CartContext'

type AddToCartComponentProps = {
	productId: number
}

export function AddToCartComponent({ productId }: AddToCartComponentProps) {
	const { addToCart } = useCartContext()

	const handleAddToCart = (productId: number) => {
		addToCart(productId)
	}

	return (
		<button
			onClick={() => handleAddToCart(productId)}
			type="button"
			className="mt-8 grid h-12 w-full place-items-center rounded-full bg-emerald-600 text-sm font-semibold text-white"
		>
			Adicionar ao carrinho
		</button>
	)
}
