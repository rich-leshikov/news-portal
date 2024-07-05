import {NewsListWithSkeleton} from '@/widgets'
import {useGetLatestNewsQuery} from '@/entities'

import styles from './styles.module.scss'

export const LatestNews = () => {
	const { data, isLoading } = useGetLatestNewsQuery(null)

	return (
		<section className={styles.section}>
			<NewsListWithSkeleton isLoading={isLoading} news={data && data.news} type={'banner'} direction={'row'}/>
		</section>
	)
}
