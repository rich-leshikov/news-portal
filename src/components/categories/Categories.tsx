import {FC} from 'react'

import styles from './Categories.module.scss'

type Props = {
	categories: string[]
	selectedCategory: string | null
	setSelectedCategory: (category: string | null) => void
}

export const Categories: FC<Props> = ({categories, selectedCategory, setSelectedCategory}) => {
	return (
		<div className={styles.categories}>
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
}
