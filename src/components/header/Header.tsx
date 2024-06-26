import {FC, useEffect, useState} from 'react'
import {themeIcons} from '../../assets'
import {useTheme} from '../../context'
import {formatDate} from '../../shared'

import styles from './Header.module.scss'

export const Header: FC = () => {
	const {isDark, toggleTheme} = useTheme()

	const [date, setDate] = useState<string>('')

	useEffect(() => {
		const currentDate = formatDate(new Date())
		if (currentDate !== date) {
			setDate(currentDate)
		}
	})

	return (
		<header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
			<div className={styles.info}>
				<h1 className={styles.title}>NEWS</h1>
				<p className={styles.date}>{date}</p>
			</div>
			<img
				src={isDark ? themeIcons.light : themeIcons.dark}
				alt="theme icon"
				width={30}
				onClick={toggleTheme}
			/>
		</header>
	)
}
