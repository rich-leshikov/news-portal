import {useState} from 'react'

export type TFilters = {
	page_number: number
	page_size: number
	category: string | null
	keywords: string
}

export const useFilters = (initialFilters: TFilters) => {
	const [filters, setFilters] = useState<TFilters>(initialFilters)

	const changeFilter = (key: string, value: number | string | null) => {
		setFilters(prev => ({
			...prev,
			[key]: value
		}))
	}

	return {filters, changeFilter}
}