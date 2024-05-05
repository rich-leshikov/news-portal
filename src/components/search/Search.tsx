import {FC} from 'react'

import styles from './Search.module.scss'

type Props = {
	keywords: string
	setKeywords: (keywords: string) => void
}

export const Search: FC<Props> = ({keywords, setKeywords}) => {
	return (
		<div className={styles.search}>
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
