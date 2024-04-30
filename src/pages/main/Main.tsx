import {useEffect, useState} from 'react'
import {getNews} from '../../api'
import {NewsBanner, NewsList, Skeleton} from '../../components'

import styles from './Main.module.scss'

export const Main = () => {
	const [news, setNews] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchNews = async () => {
			try {
				setIsLoading(true)
				const response = await getNews()
				setIsLoading(false)
				setNews(response.news)
			} catch (error) {
				console.log(error)
			}
		}
		fetchNews()
	}, [])

	return (
		<main className={styles.main}>
			{news.length > 0 && !isLoading ? <NewsBanner item={news[0]}/> : <Skeleton count={1} type={'banner'}/>}

			{!isLoading ? <NewsList news={news}/> : <Skeleton count={10} type={'item'}/>}
		</main>
	)
}
