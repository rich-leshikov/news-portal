import {useEffect, useState} from 'react'
import {getNews} from '../../api'
import {NewsBanner, NewsList, Pagination, Skeleton} from '../../components'

import styles from './Main.module.scss'

export const Main = () => {
	const [news, setNews] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState<number>(1)
	const totalPages = 10
	const pageSize = 10

	const fetchNews = async (currentPage: number) => {
		try {
			setIsLoading(true)
			const response = await getNews(currentPage, pageSize)
			setIsLoading(false)
			setNews(response.news)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchNews(currentPage)
	}, [currentPage])

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
			{news.length > 0 && !isLoading ? <NewsBanner item={news[0]}/> : <Skeleton count={1} type={'banner'}/>}
			<Pagination
				totalPages={totalPages}
				currentPage={currentPage}
				onPreviousPage={handlePreviousPage}
				onNextPage={handleNextPage}
				onPageNumber={handlePageNumber}
			/>
			{!isLoading ? <NewsList news={news}/> : <Skeleton count={10} type={'item'}/>}
		</main>
	)
}
