import {FC, useEffect, useState} from 'react'
import {formatDate} from '../../shared'
import {themeIcons} from '../../assets'

import styles from './Header.module.scss'

type Props = {
	isDark: boolean
	setIsDark: (isDark: boolean) => void
}

export const Header: FC<Props> = ({isDark, setIsDark}) => {
	const [date, setDate] = useState<string>('')

	useEffect(() => {
		const currentDate = formatDate(new Date())
		if (currentDate !== date) {
			setDate(currentDate)
		}
	})

	const onSetIsDark = (isDark: boolean) => setIsDark(!isDark)

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
				onClick={() => onSetIsDark(isDark)}
			/>
		</header>
	)
}
