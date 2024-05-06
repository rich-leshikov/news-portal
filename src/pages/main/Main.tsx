import {useState} from 'react'
import {getCategories, getNews} from '../../api'
import {Categories, NewsBannerWithSkeleton, NewsListWithSkeleton, Pagination, Search} from '../../components'
import {PAGE_SIZE, TOTAL_PAGES} from '../../constants'
import {useDebounce, useFetch} from '../../shared'

import styles from './Main.module.scss'

export const Main = () => {
	const [filters, setFilters] = useState<{
		page_number: number
		page_size: number
		category: string,
		keywords: string
	}>({
		page_number: 1,
		page_size: PAGE_SIZE,
		category: 'all',
		keywords: ''
	})

	const changeFilter = (key: string, value: number | string) => {
		setFilters(prev => ({
			...prev,
			[key]: value
		}))
	}

	const debouncedKeywords = useDebounce(filters.keywords, 1500)

	const {data, isLoading} = useFetch(getNews, {
		...filters,
		keywords: debouncedKeywords
	})

	const {data: dataCategories} = useFetch(getCategories)

	// const fetchCategories = async () => {
	// 	try {
	// 		const response = await getCategories()
	// 		setCategories(['all', ...response.categories])
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }
	//
	// const fetchNews = async (currentPage: number) => {
	// 	try {
	// 		setIsLoading(true)
	// 		const response = await getNews({
	// 			page_number: currentPage,
	// 			page_size: PAGE_SIZE,
	// 			category: selectedCategory === 'all' ? null : selectedCategory,
	// 			keywords
	// 		})
	// 		setIsLoading(false)
	// 		setNews(response.news)
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }
	//
	// useEffect(() => {
	// 	fetchCategories()
	// }, [])
	//
	// useEffect(() => {
	// 	fetchNews(currentPage)
	// }, [currentPage, selectedCategory, debouncedKeywords])

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
