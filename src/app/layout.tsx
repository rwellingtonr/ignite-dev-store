import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
	title: 'Dev Store',
	description: 'Store for developers',
}

type RootLayoutProps = {
	readonly children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html className={`${inter.variable} antialiased`} lang="pt">
			<body className="bg-zinc-950 text-zinc-50">{children}</body>
		</html>
	)
}
