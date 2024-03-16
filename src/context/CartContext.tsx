'use client'

import { createContext, useContext, useState } from 'react'

type CartItem = {
	productId: number
	quantity: number
}

type CartContextProviderProps = {
	children: React.ReactNode
}

type CartContext = {
	items: CartItem[]
	addToCart: (productId: number) => void
}

const CartContext = createContext({} as CartContext)

export const useCartContext = () => useContext(CartContext)

export function CartContextProvider(props: CartContextProviderProps) {
	const [cart, setCart] = useState<CartItem[]>([])

	const addToCart = (productId: number) => {
		setCart((state) => {
			const isIncluded = state.some((item) => item.productId === productId)

			if (!isIncluded) {
				return [
					...state,
					{
						productId,
						quantity: 1,
					},
				]
			}

			return state.map((item) => {
				if (item.productId !== productId) return item

				return { ...item, quantity: item.quantity + 1 }
			})
		})
	}

	return (
		<CartContext.Provider
			value={{
				items: cart,
				addToCart,
			}}
		>
			{props.children}
		</CartContext.Provider>
	)
}
