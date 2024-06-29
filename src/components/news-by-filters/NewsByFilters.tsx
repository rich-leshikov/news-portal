import {FC} from 'react'
import {setFilters, useAppDispatch, useAppSelector, useGetNewsQuery} from '../../app'
import {NewsListWithSkeleton} from '../news-list'
import {NewsFilters} from '../news-filters'
import {TOTAL_PAGES} from '../../constants'
import {useDebounce} from '../../shared'
import {PaginationWrapper} from '../pagination-wrapper'

import styles from './NewsByFilters.module.scss'

export const NewsByFilters: FC = () => {
	const dispatch = useAppDispatch()
	const filters = useAppSelector(state => state.news.filters)
	const news = useAppSelector(state => state.news.news)

	const debouncedKeywords = useDebounce(filters.keywords, 1500)

	const {isLoading} = useGetNewsQuery({
		...filters,
		keywords: debouncedKeywords
	})

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

	return (
		<section className={styles.section}>
			<NewsFilters filters={filters}/>
			<PaginationWrapper
				top={true}
				bottom={true}
				totalPages={TOTAL_PAGES}
				currentPage={filters.page_number}
				onPreviousPage={handlePreviousPage}
				onNextPage={handleNextPage}
				onPageNumber={handlePageNumber}
			>
				<NewsListWithSkeleton isLoading={isLoading} news={news}/>
			</PaginationWrapper>
		</section>
	)
}
