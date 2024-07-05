import {FC} from 'react'
import {useAppDispatch, useAppSelector,} from '@/app'
import {NewsFilters} from '@/pages'
import {TOTAL_PAGES, useDebounce} from '@/shared'
import {setFilters, useGetNewsQuery} from '@/entities'
import {NewsListWithSkeleton} from '@/widgets'
import {Pagination} from '@/features'

import styles from './styles.module.scss'

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
			<Pagination
				top={true}
				bottom={true}
				totalPages={TOTAL_PAGES}
				currentPage={filters.page_number}
				onPreviousPage={handlePreviousPage}
				onNextPage={handleNextPage}
				onPageNumber={handlePageNumber}
			>
				<NewsListWithSkeleton isLoading={isLoading} news={news} type={'item'} direction={'column'}/>
			</Pagination>
		</section>
	)
}
