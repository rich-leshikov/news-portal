import {FC} from 'react'
import {Categories} from '../categories'
import {Search} from '../search'
import {FiltersType, useFetch} from '../../shared'
import {getCategories} from '../../api'

import styles from './NewsFilters.module.scss'

type Props = {
	filters: FiltersType
	changeFilter: (key: string, value: number | string | null) => void
}

export const NewsFilters: FC<Props> = ({filters, changeFilter}) => {
	const {data: dataCategories} = useFetch(getCategories)

	return (
		<div className={styles.filters}>
			{dataCategories ? <Categories
				categories={dataCategories.categories}
				selectedCategory={filters.category}
				setSelectedCategory={(category) => changeFilter('category', category)}
			/> : null}
			<Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)}/>
		</div>
	)
}
