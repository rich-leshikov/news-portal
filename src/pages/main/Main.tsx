import {useEffect, useState} from 'react'
import {getNews} from '../../api'
import {NewsBanner, NewsList} from '../../components'

import styles from './Main.module.scss'

export const Main = () => {
	const [news, setNews] = useState([])

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await getNews()
				setNews(response.news)
			} catch (error) {
				console.log(error)
			}
		}
		fetchNews()
	}, [])

	return (
		<main className={styles.main}>
			{news.length > 0 && <NewsBanner item={news[0]}/>}

			<NewsList news={news}/>
		</main>
	)
}
