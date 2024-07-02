import {FC} from 'react'
import {formatTimeAgo} from '@/shared'
import {Image} from '@/components'
import {TNewsItem} from '@/entities'

import styles from './styles.module.scss'

type Props = {
	item: TNewsItem
}

export const NewsBanner: FC<Props> = ({item}) => {
	const timePublished = (new Date()).toString()

	return (
		<div className={styles.banner}>
			<Image image={item.image}/>
			<h3 className={styles.title}>{item.title}</h3>
			<p className={styles.extra}>
				{formatTimeAgo(timePublished)} by {item.author}
			</p>
		</div>
	)
}
