'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { Icon } from '../Icon'
import { FormEvent } from 'react'

export function Search() {
	const router = useRouter()
	const searchParams = useSearchParams()

	const query = searchParams.get('q') ?? ''

	const handleSearchProduct = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const form = new FormData(event.currentTarget)

		const search = form.get('search')
		if (search) {
			router.push(`/search?q=${search}`)
		}
	}

	return (
		<form
			onSubmit={handleSearchProduct}
			className="flex w-80 items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
		>
			<Icon name="Search" className="size-5 text-zinc-500" />
			<input
				type="text"
				defaultValue={query}
				placeholder="Buscar produtos"
				name="search"
				className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
			/>
		</form>
	)
}
