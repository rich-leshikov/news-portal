import {FC} from 'react'
import {Pagination} from '../pagination'
import {NewsListWithSkeleton} from '../news-list'
import {NewsFilters} from '../news-filters'
import {NewsType} from '../../api'
import {TOTAL_PAGES} from '../../constants'
import {FiltersType} from '../../shared'

import styles from './NewsByFilters.module.scss'

type Props = {
	news: NewsType
	filters: FiltersType
	isLoading: boolean
	changeFilter: (key: string, value: number | string | null) => void
}

export const NewsByFilters: FC<Props> = ({filters, isLoading, news, changeFilter}) => {
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
			<Pagination
				totalPages={TOTAL_PAGES}
				currentPage={filters.page_number}
				onPreviousPage={handlePreviousPage}
				onNextPage={handleNextPage}
				onPageNumber={handlePageNumber}
			/>
			<NewsListWithSkeleton isLoading={isLoading} news={news}/>
			<Pagination
				totalPages={TOTAL_PAGES}
				currentPage={filters.page_number}
				onPreviousPage={handlePreviousPage}
				onNextPage={handleNextPage}
				onPageNumber={handlePageNumber}
			/>
		</section>
	)
}
