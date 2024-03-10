import { icons, LucideProps } from 'lucide-react'

export type IconName = keyof typeof icons

type IconProps = Omit<LucideProps, 'ref'> & {
	name: IconName
	className: string
}

export function Icon({ className, name, ...props }: IconProps) {
	const LucideIcon = icons[name]

	return (
		<span>
			<LucideIcon className={className} {...props} />
		</span>
	)
}
