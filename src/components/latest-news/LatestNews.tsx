import {BannersListWithSkeleton} from '../banners-list'
import {TNewsApiResponse, useFetch} from '../../shared'
import {getLatestNews} from '../../api'

import styles from './LatestNews.module.scss'

export const LatestNews = () => {
	const {data, isLoading} = useFetch<TNewsApiResponse, null>(getLatestNews)

	return (
		<section className={styles.section}>
			<BannersListWithSkeleton banners={data && data.news} isLoading={isLoading}/>
		</section>
	)
}
