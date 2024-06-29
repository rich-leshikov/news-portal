import {BannersListWithSkeleton} from '../banners-list'

import styles from './LatestNews.module.scss'
import {useGetLatestNewsQuery} from '../../app'

export const LatestNews = () => {
	const { data, isLoading } = useGetLatestNewsQuery(null)

	return (
		<section className={styles.section}>
			<BannersListWithSkeleton banners={data && data.news} isLoading={isLoading}/>
		</section>
	)
}
