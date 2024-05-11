import {getNews} from '../../api'
import {LatestNews, NewsByFilters} from '../../components'
import {PAGE_SIZE} from '../../constants'
import {useDebounce, useFetch, useFilters} from '../../shared'

import styles from './Main.module.scss'

export const Main = () => {
	const {filters, changeFilter} = useFilters({
		page_number: 1,
		page_size: PAGE_SIZE,
		category: null,
		keywords: ''
	})

	const debouncedKeywords = useDebounce(filters.keywords, 1500)

	const {data, isLoading} = useFetch(getNews, {
		...filters,
		keywords: debouncedKeywords
	})

	return (
		<main className={styles.main}>
			<LatestNews banners={data && data.news} isLoading={isLoading}/>
			<NewsByFilters filters={filters} isLoading={isLoading} news={data?.news} changeFilter={changeFilter}/>
		</main>
	)
}
