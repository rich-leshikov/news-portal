import {FC} from 'react'

import styles from './Skeleton.module.scss'

type Props = {
	count: number
	type: 'banner' | 'item'
}

export const Skeleton: FC<Props> = ({count = 1, type = 'banner'}) => {
	return (
		<ul className={styles.list}>
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
