import React, {FC, ReactNode, useRef} from 'react'

import styles from './Slider.module.scss'

type Props = {
	children: ReactNode
	step?: number
}

export const Slider: FC<Props> = ({children, step = 150}) => {
	const sliderRef = useRef(null)

	const scrollLeft = () => {
		sliderRef.current.scrollLeft -= step
	}

	const scrollRight = () => {
		sliderRef.current.scrollRight += step
	}

	return (
		<div className={styles.slider}>
			<button className={styles.arrow} onClick={scrollLeft}>{'<'}</button>
			{React.cloneElement(children, {ref: sliderRef})}
			<button className={styles.arrow} onClick={scrollRight}>{'>'}</button>
		</div>
	)
}
