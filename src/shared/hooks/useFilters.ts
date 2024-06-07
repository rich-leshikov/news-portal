import {useState} from 'react'
import {TFilters} from '../types';

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