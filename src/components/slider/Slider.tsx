import React, {FC, ReactElement, useRef} from 'react'

import styles from './Slider.module.scss'

type Props = {
	children: ReactElement
	step?: number
}

export const Slider: FC<Props> = ({children, step = 150}) => {
	const sliderRef = useRef<HTMLElement | null>(null)

	const scrollLeft = () => {
		if (!sliderRef.current) return
		sliderRef.current.scrollLeft -= step
	}

	const scrollRight = () => {
		if (!sliderRef.current) return
		sliderRef.current.scrollLeft += step
	}

	return (
		<div className={styles.slider}>
			<button className={styles.arrow} onClick={scrollLeft}>{'<'}</button>
			{React.cloneElement(children, {ref: sliderRef})}
			<button className={styles.arrow} onClick={scrollRight}>{'>'}</button>
		</div>
	)
}
