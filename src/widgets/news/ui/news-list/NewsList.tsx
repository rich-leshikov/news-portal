import {FC} from 'react'
import {TNewsItem, withSkeleton} from '@/shared'
import {NewsItem} from '@/entities'

import styles from './styles.module.scss'

type Props = {
	news?: TNewsItem[]
}

const NewsList: FC<Props> = ({news}) => {
	return (
		<div className={styles.list}>
			{news?.map(item => <NewsItem key={item.id} item={item}/>)}
		</div>
	)
}

export const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'item', 10, 'column')
