import { Header } from '@/components/Header'

type StoreLayoutProps = {
	readonly children: React.ReactNode
}

export default function StoreLayout({ children }: StoreLayoutProps) {
	return (
		<div className="grid-rows-store mx-auto grid min-h-screen w-full max-w-screen-3xl gap-5 p-8">
			<Header />
			{children}
		</div>
	)
}
