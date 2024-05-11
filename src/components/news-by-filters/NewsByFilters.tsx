import {FC} from 'react'
import {Categories} from '../categories'
import {Search} from '../search'
import {Pagination} from '../pagination'
import {TOTAL_PAGES} from '../../constants'
import {NewsListWithSkeleton} from '../news-list'
import {FiltersType, useFetch} from '../../shared'
import {getCategories, NewsType} from '../../api'

import styles from './NewsByFilters.module.scss'

type Props = {
	news: NewsType
	filters: FiltersType
	isLoading: boolean
	changeFilter: (key: string, value: number | string | null) => void
}

export const NewsByFilters: FC<Props> = ({filters, isLoading, news, changeFilter}) => {
	const {data: dataCategories} = useFetch(getCategories)

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
			{dataCategories ? <Categories
				categories={dataCategories.categories}
				selectedCategory={filters.category}
				setSelectedCategory={(category) => changeFilter('category', category)}
			/> : null}
			<Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)}/>
			{/*<NewsBanner item={data && data.news && data.news[0]}/>*/}
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
