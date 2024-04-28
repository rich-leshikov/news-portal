import {formatDate} from '../../shared'
import {useEffect, useState} from 'react'

import styles from './Header.module.css'

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
			<h1>NEWS</h1>
			<p>{date}</p>
		</header>
	)
}
