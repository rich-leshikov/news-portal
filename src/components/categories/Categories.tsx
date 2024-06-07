import {FC, ForwardedRef, forwardRef} from 'react'
import {TCategoriesItem} from '../../shared'

import styles from './Categories.module.scss'

type Props = {
	categories: TCategoriesItem[]
	selectedCategory: TCategoriesItem | null
	setSelectedCategory: (category: TCategoriesItem | null) => void
}

export const Categories: FC<Props> = forwardRef(({categories, selectedCategory, setSelectedCategory}, ref: ForwardedRef<HTMLDivElement>) => {
	return (
		<div ref={ref} className={styles.categories}>
			<button
				className={!selectedCategory ? styles.active : styles.item}
				onClick={() => setSelectedCategory(null)}
			>all</button>
			{categories.map(category => {
				return (
					<button
						key={category}
						className={category === selectedCategory ? styles.active : styles.item}
						onClick={() => setSelectedCategory(category)}
					>
						{category}
					</button>
				)
			})}
		</div>
	)
})
