import {FC} from 'react'
import {LatestNews, NewsByFilters} from '../../components'

import styles from './Main.module.scss'

export const Main: FC = () => {
	return (
		<main className={styles.main}>
			<LatestNews/>
			<NewsByFilters/>
		</main>
	)
}
