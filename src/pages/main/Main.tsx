import {FC} from 'react'
import {LatestNews, NewsByFilters} from '../../components'

import styles from './Main.module.scss'

type Props = {
	isDark: boolean
}

export const Main: FC<Props> = ({isDark}) => {
	return (
		<main className={styles.main}>
			<LatestNews/>
			<NewsByFilters isDark={isDark}/>
		</main>
	)
}
