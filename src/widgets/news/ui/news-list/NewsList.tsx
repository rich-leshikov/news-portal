import {FC} from 'react'
import {TCard, TDirection, withSkeleton} from '@/shared'
import {NewsCard, TNewsItem} from '@/entities'

import styles from './styles.module.scss'

type Props = {
	direction?: TDirection
	news?: TNewsItem[]
	type?: TCard
}

const NewsList: FC<Props> = ({news, type = 'item'}) => {
	return (
		<div className={`${type === 'item' ? styles.items : styles.banners}`}>
			{news?.map(item => <NewsCard key={item.id} item={item} type={type}/>)}
		</div>
	)
}

export const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10)
