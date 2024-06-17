import {FC} from 'react'
import {NewsListWithSkeleton} from '../news-list'
import {NewsFilters} from '../news-filters'
import {getNews} from '../../api'
import {PAGE_SIZE, TOTAL_PAGES} from '../../constants'
import {TNewsApiResponse, TParams, useDebounce, useFetch, useFilters} from '../../shared'
import {PaginationWrapper} from '../pagination-wrapper'

import styles from './NewsByFilters.module.scss'

type Props = {
	isDark: boolean
}

export const NewsByFilters: FC<Props> = ({isDark}) => {
	const {filters, changeFilter} = useFilters({
		page_number: 1,
		page_size: PAGE_SIZE,
		category: null,
		keywords: ''
	})

	const debouncedKeywords = useDebounce(filters.keywords, 1500)

	const {data, isLoading} = useFetch<TNewsApiResponse, TParams>(getNews, {
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
			<NewsFilters isDark={isDark} filters={filters} changeFilter={changeFilter}/>
			<PaginationWrapper
				isDark={isDark}
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
