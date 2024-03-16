'use client'

import { Skeleton } from '@/components/Skeleton'
import { useSearchParams } from 'next/navigation'

export default function SearchLoading() {
	const searchParams = useSearchParams()
	const query = searchParams.get('q')

	return (
		<div className="flex flex-col gap-4">
			<p className="text-sm">
				Resultados para: <span className="font-semibold">{query}</span>
			</p>

			<div className="grid grid-cols-3 gap-6">
				{Array.from({ length: 6 }).map((_, i) => (
					<Skeleton className="h-[26.5rem]" key={`search-skeleton-${i}`} />
				))}
			</div>
		</div>
	)
}
