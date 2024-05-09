import {FC} from 'react'
import {BannerType, NewsBanner} from '../news-banner'
import {withSkeleton} from '../../shared'

import styles from './BannersList.module.scss'

type Props = {
	banners: BannerType[]
}

const BannersList: FC<Props> = ({banners}) => {
	return (
		<ul className={styles.banners}>
			{banners?.map(banner => (
				<NewsBanner key={banner.title} item={banner}/>
			))}
		</ul>
	)
}

export const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 6)
