import {FC, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useTheme} from '@/app'
import {formatDate} from '@/shared'
import {ThemeButton} from '@/features'

import styles from './styles.module.scss'

export const Header: FC = () => {
	const {isDark} = useTheme()

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
				<Link to={'/'}>
					<h1 className={styles.title}>NEWS</h1>
				</Link>
				<p className={styles.date}>{date}</p>
			</div>
			<ThemeButton/>
		</header>
	)
}
