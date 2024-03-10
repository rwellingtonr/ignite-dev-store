import Link from 'next/link'
import { Icon } from '../Icon'
import Image from 'next/image'

export function Header() {
	return (
		<header className="flex items-center justify-between ">
			<div className="flex items-center gap-5">
				<Link href="/" className="text-2xl font-extrabold text-white">
					Dev Store
				</Link>

				<form
					action=""
					className="flex w-80 items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
				>
					<Icon name="Search" className="size-5 text-zinc-500" />
					<input
						type="text"
						placeholder="Buscar produtos"
						className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
					/>
				</form>
			</div>

			<div className="flex items-center gap-4">
				<div className="flex items-center gap-2">
					<Icon className="size-4" name="ShoppingBag" />
					<span className="text-sm" lang="en">
						Cart (0)
					</span>
				</div>

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
