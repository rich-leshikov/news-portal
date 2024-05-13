import {LatestNews, NewsByFilters} from '../../components'

import styles from './Main.module.scss'

export const Main = () => {
	return (
		<main className={styles.main}>
			<LatestNews/>
			<NewsByFilters/>
		</main>
	)
}
