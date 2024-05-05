import {useEffect, useState} from 'react'
import {getCategories, getNews} from '../../api'
import {Categories, NewsBanner, NewsList, Pagination, Search, Skeleton} from '../../components'
import {useDebounce} from '../../shared'

import styles from './Main.module.scss'

export const Main = () => {
	const [categories, setCategories] = useState<string[]>([])
	const [selectedCategory, setSelectedCategory] = useState<string>('all')
	const [keywords, setKeywords] = useState<string>('')
	const [news, setNews] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState<number>(1)
	const totalPages = 10
	const pageSize = 10

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
				page_size: pageSize,
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
		if (currentPage < totalPages) {
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
			{news.length > 0 && !isLoading ? <NewsBanner item={news[0]}/> : <Skeleton count={1} type={'banner'}/>}
			<Pagination
				totalPages={totalPages}
				currentPage={currentPage}
				onPreviousPage={handlePreviousPage}
				onNextPage={handleNextPage}
				onPageNumber={handlePageNumber}
			/>
			{!isLoading ? <NewsList news={news}/> : <Skeleton count={10} type={'item'}/>}
			<Pagination
				totalPages={totalPages}
				currentPage={currentPage}
				onPreviousPage={handlePreviousPage}
				onNextPage={handleNextPage}
				onPageNumber={handlePageNumber}
			/>
		</main>
	)
}
