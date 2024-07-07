import {FC} from 'react'
import {formatTimeAgo, Image} from '@/shared'
import {TNewsItem} from '@/entities'

import styles from './styles.module.scss'

type Props = {
	item: TNewsItem
}

export const NewsDetails: FC<Props> = ({item}) => {
	return (
		<div className={`${styles.details}`}>
			<Image image={item.image}/>

			<div className={styles.description}>
				<p>{item.description} ({item.language}) <a href={item.url}>Read more...</a></p>
				<p className={styles.extra}>
					{formatTimeAgo(item.published)} by {item.author}
				</p>
			</div>
		</div>
	)
}
