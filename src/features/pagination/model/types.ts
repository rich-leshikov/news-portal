export type TPagination = {
	totalPages: number
	currentPage: number
	onPreviousPage: () => void
	onNextPage: () => void
	onPageNumber: (pageNumber: number) => void
}