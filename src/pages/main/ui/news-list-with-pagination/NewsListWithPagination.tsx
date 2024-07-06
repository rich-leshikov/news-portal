import {FC} from 'react'
import {TFilters, TOTAL_PAGES} from '@/shared'
import {TNewsItem} from '@/entities'
import {NewsListWithSkeleton} from '@/widgets'
import {Pagination} from '@/features'
import {usePaginationNews} from '@/pages'

type Props = {
	filters: TFilters
	isLoading: boolean
	news: TNewsItem[]
}

export const NewsListWithPagination: FC<Props> = ({filters, isLoading, news}) => {
	const {handleNextPage, handlePreviousPage, handlePageNumber} = usePaginationNews(filters)

	return (
		<Pagination
			top={true}
			bottom={true}
			totalPages={TOTAL_PAGES}
			currentPage={filters.page_number}
			onPreviousPage={handlePreviousPage}
			onNextPage={handleNextPage}
			onPageNumber={handlePageNumber}
		>
			<NewsListWithSkeleton isLoading={isLoading} news={news} type={'item'} direction={'column'}/>
		</Pagination>
	)
}
