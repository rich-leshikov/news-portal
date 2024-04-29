import {FC} from 'react'

import styles from './NewsList.module.scss'

export type NewsItemType = {
	author: string
	category?: unknown[]
	description?: string
	id: string
	image?: string
	language?: string
	published: string
	title: string
	url: string
}

type Props = {
	news?: NewsItemType[]
}

export const NewsList: FC<Props> = ({news}) => {
	return (
		<div className={styles.list}>
			{news?.map(item => <li key={item.id}>{item.title}</li>)}
		</div>
	)
}
