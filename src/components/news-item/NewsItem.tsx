import {FC} from 'react'
import {formatTimeAgo, TNewsItem} from '../../shared'

import styles from './NewsItem.module.scss'


type Props = {
	item: TNewsItem
}

export const NewsItem: FC<Props> = ({item}) => {
	return (
		<li className={styles.item}>
			<div className={styles.wrapper} style={{ backgroundImage: `url(${item.image})`}}></div>
			<div className={styles.info}>
				<h3 className={styles.title}>{item.title}</h3>
				<p className={styles.extra}>
					{formatTimeAgo(item.published)} by {item.author}
				</p>
			</div>
		</li>
	)
}
