import {FC, ReactNode} from 'react'

import styles from './Slider.module.scss'

type Props = {
	children: ReactNode
}

export const Slider: FC<Props> = ({children}) => {
	return (
		<div className={styles.slider}>
			<button className={styles.arrow}>{'<'}</button>
			{children}
			<button className={styles.arrow}>{'>'}</button>
		</div>
	)
}
