import {FC} from 'react'
import {NewsItem, NewsItemType} from '../news-item'
import {withSkeleton} from '../../shared'

import styles from './NewsList.module.scss'

type Props = {
	news?: NewsItemType[]
}

const NewsList: FC<Props> = ({news}) => {
	return (
		<div className={styles.list}>
			{news?.map(item => <NewsItem key={item.id} item={item}/>)}
		</div>
	)
}

export const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10)
