import {formatDate} from '../../shared'
import {useEffect, useState} from 'react'

import styles from './Header.module.scss'

export const Header = () => {
	const [date, setDate] = useState<string>('')

	useEffect(() => {
		const currentDate = formatDate(new Date())
		if (currentDate !== date) {
			setDate(currentDate)
		}
	})

	return (
		<header className={styles.header}>
			<h1 className={styles.title}>NEWS</h1>
			<p className={styles.date}>{date}</p>
		</header>
	)
}
