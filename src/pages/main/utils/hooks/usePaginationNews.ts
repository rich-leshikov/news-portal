import {useAppDispatch} from '@/app'
import {setFilters} from '@/entities'
import {TFilters, TOTAL_PAGES} from '@/shared'

export const usePaginationNews = (filters: TFilters) => {
	const dispatch = useAppDispatch()

	const handlePreviousPage = () => {
		if (filters.page_number > 1) {
			dispatch(setFilters({key: 'page_number', value: filters.page_number - 1}))
		}
	}

	const handleNextPage = () => {
		if (filters.page_number < TOTAL_PAGES) {
			dispatch(setFilters({key: 'page_number', value: filters.page_number + 1}))
		}
	}

	const handlePageNumber = (pageNumber: number) => {
		dispatch(setFilters({key: 'page_number', value: pageNumber}))
	}

	return {handlePreviousPage, handleNextPage, handlePageNumber}
}