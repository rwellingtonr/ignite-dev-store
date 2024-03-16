import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)', ...fontFamily.sans],
			},
			maxWidth: {
				'screen-3xl': '1600px',
			},
			gridTemplateRows: {
				store: 'min-content max-content',
			},
		},
	},
	plugins: [],
}
export default config
