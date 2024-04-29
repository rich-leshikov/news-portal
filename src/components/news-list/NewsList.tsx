import {FC} from 'react'
import {NewsItem, NewsItemType} from '../news-item'

import styles from './NewsList.module.scss'

type Props = {
	news?: NewsItemType[]
}

export const NewsList: FC<Props> = ({news}) => {
	return (
		<div className={styles.list}>
			{news?.map(item => <NewsItem key={item.id} item={item}/>)}
		</div>
	)
}
