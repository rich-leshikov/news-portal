import {useNavigate} from 'react-router-dom'
import {useAppDispatch} from '@/app'
import {NewsListWithSkeleton} from '@/widgets'
import {setCurrentNews, TNewsItem, useGetLatestNewsQuery} from '@/entities'

import styles from './styles.module.scss'

export const LatestNews = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const {data, isLoading} = useGetLatestNewsQuery(null)

	const navigateTo = (news: TNewsItem) => {
		dispatch(setCurrentNews(news))
		navigate(`/news/${news.id}`)
	}

	return (
		<section className={styles.section}>
			<NewsListWithSkeleton
				isLoading={isLoading}
				news={data && data.news}
				type={'banner'}
				direction={'row'}
				viewNewsSlot={(news: TNewsItem) => <p onClick={() => navigateTo(news)}>view more...</p>}/>
		</section>
	)
}
