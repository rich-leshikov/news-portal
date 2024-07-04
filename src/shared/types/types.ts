import {TCategoriesItem} from '@/entities'

export type TSkeleton = 'banner' | 'item'

export type TDirection = 'row' | 'column'

export type TFilters = {
	page_number: number
	page_size: number
	category: TCategoriesItem | null
	keywords: string
}

export type TParams = Partial<TFilters>
