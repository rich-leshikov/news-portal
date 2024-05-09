import {FC} from 'react'
import {BannersListWithSkeleton} from '../banners-list'
import {BannerType} from '../news-banner'

import styles from './LatestNews.module.scss'

type Props = {
	banners: BannerType[]
	isLoading: boolean
}

export const LatestNews: FC<Props> = ({banners, isLoading}) => {
	return (
		<section className={styles.section}>
			<BannersListWithSkeleton banners={banners} isLoading={isLoading}/>
		</section>
	)
}
