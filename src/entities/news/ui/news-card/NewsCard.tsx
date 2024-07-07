import {FC, ReactNode} from 'react'
import {formatTimeAgo, Image, TCard} from '@/shared'
import {TNewsItem} from '@/entities'

import styles from './styles.module.scss'

type Props = {
	item: TNewsItem
	type: TCard
	viewNewsSlot?: (news: TNewsItem) => ReactNode
}

export const NewsCard: FC<Props> = ({item, type, viewNewsSlot}) => {
	return (
		<li className={`${styles.card} ${type === 'banner' && styles.banner}`}>
			{
				type === 'banner'
					? <Image image={item.image}/>
					: <div className={styles.wrapper} style={{backgroundImage: `url(${item.image})`}}></div>
			}

			<div className={`${type === 'item' && styles.info}`}>
				<h3 className={styles.title}>{item.title}</h3>
				<p className={styles.extra}>
					{formatTimeAgo(item.published)} by {item.author}
				</p>
			</div>

			{viewNewsSlot ? viewNewsSlot(item) : null}
		</li>
	)
}
