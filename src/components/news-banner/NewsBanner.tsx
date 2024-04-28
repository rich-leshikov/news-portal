import {FC} from 'react'
import {formatTimeAgo} from '../../shared'

import styles from './NewsBanner.module.scss'

type BannerType = {
	title: string
	timePublished: string
	author: string
}

type Props = {
	item: BannerType
}

export const NewsBanner: FC<Props> = ({item}) => {
	return (
		<div className={styles.banner}>
			<h3 className={styles.title}>{item.title}</h3>
			<p className={styles.extra}>
				{formatTimeAgo(item.timePublished)} by {item.author}
			</p>
		</div>
	)
}
