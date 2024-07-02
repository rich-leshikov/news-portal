import {useGetLatestNewsQuery} from '@/app/model';
import {BannersListWithSkeleton} from '@/widgets'

import styles from './styles.module.scss'

export const LatestNews = () => {
	const { data, isLoading } = useGetLatestNewsQuery(null)

	return (
		<section className={styles.section}>
			<BannersListWithSkeleton banners={data && data.news} isLoading={isLoading}/>
		</section>
	)
}
