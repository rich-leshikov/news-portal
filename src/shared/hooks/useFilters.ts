import {useState} from 'react'

type FiltersType = {
	page_number: number
	page_size: number
	category: string,
	keywords: string
}

export const useFilters = (initialFilters: FiltersType) => {
	const [filters, setFilters] = useState<FiltersType>(initialFilters)

	const changeFilter = (key: string, value: number | string) => {
		setFilters(prev => ({
			...prev,
			[key]: value
		}))
	}

	return {filters, changeFilter}
}