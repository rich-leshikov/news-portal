import {FC} from 'react'

import styles from './Skeleton.module.scss'

type Props = {
	count: number
	type: 'banner' | 'item'
	direction: 'row' | 'column'
}

export const Skeleton: FC<Props> = ({count = 1, type = 'banner', direction = 'column'}) => {
	return (
		<ul className={ direction === 'column' ? styles.columnList : styles.rowList}>
			{count > 1 ? (
				[...Array(count)].map((_, index) => (
					<li key={index} className={styles.item}></li>
				))
			) : (
				<li className={type === 'banner' ? styles.banner : styles.item}></li>
			)}
		</ul>
	)
}
