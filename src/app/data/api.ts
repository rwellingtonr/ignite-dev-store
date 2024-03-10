import { env } from '../config/env'

export const api = async <T = any>(url: string, requestInit?: RequestInit): Promise<T> => {
	const apiPrefix = '/api'
	const baseUrl = new URL(apiPrefix.concat(url), env.NEXT_PUBLIC_BASE_URL)

	const response = await fetch(baseUrl, requestInit)
	const data = await response.json()
	return data
}
