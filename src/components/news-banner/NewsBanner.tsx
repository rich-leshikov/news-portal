import {FC} from 'react'
import {formatTimeAgo} from '../../shared'
import {Image} from '../image'

import styles from './NewsBanner.module.scss'

export type TBanner = {
	image: string
	title: string
	timePublished: string
	author: string
}

type Props = {
	item: TBanner
}

export const NewsBanner: FC<Props> = ({item}) => {
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
