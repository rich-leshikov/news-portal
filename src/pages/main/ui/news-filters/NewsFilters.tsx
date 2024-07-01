import {FC} from 'react'
import {useAppDispatch, useTheme} from '@/app'
import {setFilters, useGetCategoriesQuery} from '@/app/model';
import {Categories, Search, Slider} from '@/components'
import {TFilters} from '@/shared'

import styles from './styles.module.scss'

type Props = {
	filters: TFilters
}

export const NewsFilters: FC<Props> = ({filters}) => {
	const dispatch = useAppDispatch()

	const {data} = useGetCategoriesQuery(null)
	const {isDark} = useTheme()

	return (
		<div className={styles.filters}>
			<Slider isDark={isDark}>
				{data ? <Categories
					categories={data.categories}
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
