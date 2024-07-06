import {FC} from 'react'
import {useAppDispatch, useTheme} from '@/app'
import {TFilters} from '@/shared'
import {setFilters, TCategoriesItem} from '@/entities'
import {Categories, Search, Slider} from '@/features'

import styles from './styles.module.scss'

type Props = {
	categories?: TCategoriesItem[] | null
	filters: TFilters
}

export const NewsFilters: FC<Props> = ({categories, filters}) => {
	const dispatch = useAppDispatch()

	const {isDark} = useTheme()

	return (
		<div className={styles.filters}>
			<Slider isDark={isDark}>
				{categories ? <Categories
					categories={categories}
					selectedCategory={filters.category}
					setSelectedCategory={(category) => {
						dispatch(setFilters({key: 'category', value: category}))
					}}
				/> : <></>}
			</Slider>
			<Search
				isDark={isDark}
				keywords={filters.keywords}
				setKeywords={(keywords) => {
					dispatch(setFilters({key: 'keywords', value: keywords}))
				}}
			/>
		</div>
	)
}
