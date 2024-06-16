import {FC} from 'react'
import {NewsItem} from '../news-item'
import {TNewsItem, withSkeleton} from '../../shared'

import styles from './NewsList.module.scss'

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
