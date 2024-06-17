import {FC} from 'react'

import styles from './Search.module.scss'

type Props = {
	isDark: boolean
	keywords: string
	setKeywords: (keywords: string) => void
}

export const Search: FC<Props> = ({isDark, keywords, setKeywords}) => {
	return (
		<div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
			<input
				className={styles.input}
				type="text"
				value={keywords}
				onChange={(e) => setKeywords(e.target.value)}
				placeholder={'Javascript'}
			/>
		</div>
	)
}
