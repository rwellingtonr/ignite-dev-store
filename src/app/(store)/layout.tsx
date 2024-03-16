import { Header } from '@/components/Header'
import { CartContextProvider } from '@/context/CartContext'

type StoreLayoutProps = {
	readonly children: React.ReactNode
}

export default function StoreLayout({ children }: StoreLayoutProps) {
	return (
		<CartContextProvider>
			<div className="mx-auto grid min-h-screen w-full max-w-screen-3xl grid-rows-store gap-5 p-8">
				<Header />
				{children}
			</div>
		</CartContextProvider>
	)
}
