'use client'

import { useCartContext } from '@/context/CartContext'
import { Icon } from '../Icon'

export function CartWidget() {
	const { items } = useCartContext()
	console.log('🚀 ~ CartWidget ~ items:', items)

	return (
		<div className="flex items-center gap-2">
			<Icon className="size-4" name="ShoppingBag" />
			<span className="text-sm" lang="en">
				Cart ({items?.length})
			</span>
		</div>
	)
}
