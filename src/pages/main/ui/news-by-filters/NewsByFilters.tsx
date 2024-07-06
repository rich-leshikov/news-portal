import {FC} from 'react'
import {useGetCategoriesQuery, useGetNewsQuery} from '@/entities'
import {NewsFilters} from '@/widgets'
import {NewsListWithPagination} from '@/pages'
import {useAppSelector} from '@/app'
import {useDebounce} from '@/shared'

import styles from './styles.module.scss'

export const NewsByFilters: FC = () => {
	const filters = useAppSelector(state => state.news.filters)
	const news = useAppSelector(state => state.news.news)

	const debouncedKeywords = useDebounce(filters.keywords, 1500)

	const {isLoading} = useGetNewsQuery({
		...filters,
		keywords: debouncedKeywords
	})

	const {data} = useGetCategoriesQuery(null)

	return (
		<section className={styles.section}>
			<NewsFilters categories={data?.categories || []} filters={filters}/>
			<NewsListWithPagination filters={filters} isLoading={isLoading} news={news}/>
		</section>
	)
}
