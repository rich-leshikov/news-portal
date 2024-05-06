import {getCategories, getNews} from '../../api'
import {Categories, NewsBannerWithSkeleton, NewsListWithSkeleton, Pagination, Search} from '../../components'
import {PAGE_SIZE, TOTAL_PAGES} from '../../constants'
import {useDebounce, useFetch, useFilters} from '../../shared'

import styles from './Main.module.scss'

export const Main = () => {
	const {filters, changeFilter} = useFilters({
		page_number: 1,
		page_size: PAGE_SIZE,
		category: null,
		keywords: ''
	})

	const debouncedKeywords = useDebounce(filters.keywords, 1500)

	const {data, isLoading} = useFetch(getNews, {
		...filters,
		keywords: debouncedKeywords
	})

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
		<main className={styles.main}>
			{dataCategories ? <Categories
				categories={dataCategories.categories}
				selectedCategory={filters.category}
				setSelectedCategory={(category) => changeFilter('category', category)}
			/> : null}
			<Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)}/>
			<NewsBannerWithSkeleton isLoading={isLoading} item={data && data.news && data.news[0]}/>
			<Pagination
				totalPages={TOTAL_PAGES}
				currentPage={filters.page_number}
				onPreviousPage={handlePreviousPage}
				onNextPage={handleNextPage}
				onPageNumber={handlePageNumber}
			/>
			<NewsListWithSkeleton isLoading={isLoading} news={data?.news}/>
			<Pagination
				totalPages={TOTAL_PAGES}
				currentPage={filters.page_number}
				onPreviousPage={handlePreviousPage}
				onNextPage={handleNextPage}
				onPageNumber={handlePageNumber}
			/>
		</main>
	)
}
