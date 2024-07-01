import {FC} from 'react'
import {LatestNews, NewsByFilters} from '@/pages'

import styles from './styles.module.scss'

export const Main: FC = () => {
	return (
		<main className={styles.main}>
			<LatestNews/>
			<NewsByFilters/>
		</main>
	)
}
