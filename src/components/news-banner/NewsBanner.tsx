import {FC} from 'react'
import {formatTimeAgo} from '../../shared'
import {Image} from '../image'
import {withSkeleton} from '../../shared'

import styles from './NewsBanner.module.scss'

type BannerType = {
	image: string
	title: string
	timePublished: string
	author: string
}

type Props = {
	item: BannerType
}

const NewsBanner: FC<Props> = ({item}) => {
	return (
		<div className={styles.banner}>
			<Image image={item.image}/>
			<h3 className={styles.title}>{item.title}</h3>
			<p className={styles.extra}>
				{formatTimeAgo(item.timePublished)} by {item.author}
			</p>
		</div>
	)
}

export const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner', 1)
