import Link from 'next/link'
import Image from 'next/image'
import { CartWidget } from '../CartWidget'
import { Search } from '../Search'

export function Header() {
	return (
		<header className="flex items-center justify-between ">
			<div className="flex items-center gap-5">
				<Link href="/" className="text-2xl font-extrabold text-white">
					Dev Store
				</Link>

				<Search />
			</div>

			<div className="flex items-center gap-4">
				<CartWidget />

				<div className="h-4 w-px bg-zinc-700" />

				<Link href="/" className="flex items-center gap-2 enabled:hover:underline">
					<span className="text-sm" lang="en">
						Account
					</span>

					<Image
						src="https://github.com/rwellingtonr.png"
						className="size-6 rounded-full"
						width={24}
						height={24}
						alt="Avatar utilizado pelo usuário rwellingtonr na plataforma do github"
						quality={50}
					/>
				</Link>
			</div>
		</header>
	)
}
