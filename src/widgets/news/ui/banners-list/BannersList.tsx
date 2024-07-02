import {FC} from 'react'
import {TNewsItem, withSkeleton} from '@/shared'
import {NewsBanner} from '@/entities'

import styles from './styles.module.scss'

type Props = {
	banners?: TNewsItem[] | null
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

export const BannersListWithSkeleton = withSkeleton<Props>(BannersList, 'banner', 12, 'row')
