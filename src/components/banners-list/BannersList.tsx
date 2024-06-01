import {FC} from 'react'
import {NewsBanner} from '../news-banner'
import {TBanner, withSkeleton} from '../../shared'

import styles from './BannersList.module.scss'

type Props = {
	banners?: TBanner[]
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

export const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 12, 'row')
