import {FC} from 'react'
import {useGetNewsQuery} from '../../app'
import {NewsListWithSkeleton} from '../news-list'
import {NewsFilters} from '../news-filters'
import {PAGE_SIZE, TOTAL_PAGES} from '../../constants'
import {useDebounce, useFilters} from '../../shared'
import {PaginationWrapper} from '../pagination-wrapper'

import styles from './NewsByFilters.module.scss'

export const NewsByFilters: FC = () => {
	const {filters, changeFilter} = useFilters({
		page_number: 1,
		page_size: PAGE_SIZE,
		category: null,
		keywords: ''
	})

	const debouncedKeywords = useDebounce(filters.keywords, 1500)

	const { data, isLoading } = useGetNewsQuery({
		...filters,
		keywords: debouncedKeywords
	})

	const handlePreviousPage = () => {
		if (filters.page_number > 1) {
			changeFilter('page_number', filters.page_number - 1)
		}
	}

	const handleNextPage = () => {
		if (filters.page_number < TOTAL_PAGES) {
			changeFilter('page_number', filters.page_number + 1)
		}
	}

	const handlePageNumber = (pageNumber: number) => {
		changeFilter('page_number', pageNumber)
	}

	return (
		<section className={styles.section}>
			<NewsFilters filters={filters} changeFilter={changeFilter}/>
			<PaginationWrapper
				top={true}
				bottom={true}
				totalPages={TOTAL_PAGES}
				currentPage={filters.page_number}
				onPreviousPage={handlePreviousPage}
				onNextPage={handleNextPage}
				onPageNumber={handlePageNumber}
			>
				<NewsListWithSkeleton isLoading={isLoading} news={data?.news}/>
			</PaginationWrapper>
		</section>
	)
}
