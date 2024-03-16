import { cn } from '@/lib/cn'
import type { ComponentProps } from 'react'

type SkeletonProps = ComponentProps<'div'>

export function Skeleton(props: SkeletonProps) {
	return (
		<div {...props} className={cn('animate-pulse rounded-md bg-zinc-50/10', props.className)} />
	)
}
