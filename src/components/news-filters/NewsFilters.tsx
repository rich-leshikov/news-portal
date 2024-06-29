import {FC} from 'react'
import {Categories} from '../categories'
import {Search} from '../search'
import {TFilters} from '../../shared'
import {Slider} from '../slider'
import {useTheme} from '../../context'
import {useGetCategoriesQuery} from '../../app'

import styles from './NewsFilters.module.scss'

type Props = {
	filters: TFilters
	changeFilter: (key: string, value: number | string | null) => void
}

export const NewsFilters: FC<Props> = ({filters, changeFilter}) => {
	const {data} = useGetCategoriesQuery(null)
	const {isDark} = useTheme()

	return (
		<div className={styles.filters}>
			<Slider isDark={isDark}>
				{data ? <Categories
					categories={data.categories}
					selectedCategory={filters.category}
					setSelectedCategory={(category) => changeFilter('category', category)}
				/> : <></>}
			</Slider>
			<Search
				isDark={isDark}
				keywords={filters.keywords}
				setKeywords={(keywords) => changeFilter('keywords', keywords)}
			/>
		</div>
	)
}
