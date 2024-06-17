import {formatDate} from '../../shared'
import {FC, useEffect, useState} from 'react'

import styles from './Header.module.scss'

type Props = {
	isDark: boolean
}

export const Header: FC<Props> = ({isDark}) => {
	const [date, setDate] = useState<string>('')

	useEffect(() => {
		const currentDate = formatDate(new Date())
		if (currentDate !== date) {
			setDate(currentDate)
		}
	})

	return (
		<header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
			<h1 className={styles.title}>NEWS</h1>
			<p className={styles.date}>{date}</p>
		</header>
	)
}
