import {useEffect, useState} from 'react'
import {getCategories, getNews} from '../../api'
import {Categories, NewsBannerWithSkeleton, NewsListWithSkeleton, Pagination, Search} from '../../components'
import {PAGE_SIZE, TOTAL_PAGES} from '../../constants'
import {useDebounce} from '../../shared'

import styles from './Main.module.scss'

export const Main = () => {
	const [categories, setCategories] = useState<string[]>([])
	const [selectedCategory, setSelectedCategory] = useState<string>('all')
	const [keywords, setKeywords] = useState<string>('')
	const [news, setNews] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState<number>(1)

	const debouncedKeywords = useDebounce(keywords, 1500)

	const fetchCategories = async () => {
		try {
			const response = await getCategories()
			setCategories(['all', ...response.categories])
		} catch (error) {
			console.log(error)
		}
	}

	const fetchNews = async (currentPage: number) => {
		try {
			setIsLoading(true)
			const response = await getNews({
				page_number: currentPage,
				page_size: PAGE_SIZE,
				category: selectedCategory === 'all' ? null : selectedCategory,
				keywords
			})
			setIsLoading(false)
			setNews(response.news)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchCategories()
	}, [])

	useEffect(() => {
		fetchNews(currentPage)
	}, [currentPage, selectedCategory, debouncedKeywords])

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}

	const handleNextPage = () => {
		if (currentPage < TOTAL_PAGES) {
			setCurrentPage(currentPage + 1)
		}
	}

	const handlePageNumber = (pageNumber: number) => {
		setCurrentPage(pageNumber)
	}

	return (
		<main className={styles.main}>
			<Categories
				categories={categories}
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>
			<Search keywords={keywords} setKeywords={setKeywords}/>
			<NewsBannerWithSkeleton isLoading={isLoading} item={news.length > 0 && news[0]}/>
			<Pagination
				totalPages={TOTAL_PAGES}
				currentPage={currentPage}
				onPreviousPage={handlePreviousPage}
				onNextPage={handleNextPage}
				onPageNumber={handlePageNumber}
			/>
			<NewsListWithSkeleton isLoading={isLoading} news={news}/>
			<Pagination
				totalPages={TOTAL_PAGES}
				currentPage={currentPage}
				onPreviousPage={handlePreviousPage}
				onNextPage={handleNextPage}
				onPageNumber={handlePageNumber}
			/>
		</main>
	)
}
