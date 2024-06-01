import {BannersListWithSkeleton} from '../banners-list'
import {useFetch} from '../../shared'
import {getLatestNews} from '../../api'
import {TNewsItem} from '../news-item'

import styles from './LatestNews.module.scss'

export type TNewsItemResponse = {
	news: TNewsItem[]
	page: number
	status: string
}

export const LatestNews = () => {
	const {data, isLoading} = useFetch<TNewsItemResponse, null>(getLatestNews)

	return (
		<section className={styles.section}>
			<BannersListWithSkeleton banners={data && data.news} isLoading={isLoading}/>
		</section>
	)
}
