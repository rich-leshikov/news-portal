import {FC} from 'react'
import {Categories} from '../categories'
import {Search} from '../search'
import {TCategoriesApiResponse, TFilters, useFetch} from '../../shared'
import {getCategories} from '../../api'
import {Slider} from '../slider'

import styles from './NewsFilters.module.scss'
import {useTheme} from '../../context';

type Props = {
	filters: TFilters
	changeFilter: (key: string, value: number | string | null) => void
}

export const NewsFilters: FC<Props> = ({filters, changeFilter}) => {
	const {data: dataCategories} = useFetch<TCategoriesApiResponse, null>(getCategories)
	const {isDark} = useTheme()

	return (
		<div className={styles.filters}>
			<Slider isDark={isDark}>
				{dataCategories ? <Categories
					categories={dataCategories.categories}
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
