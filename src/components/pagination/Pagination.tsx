import {FC} from 'react'

import styles from './Pagination.module.scss'

export type TPaginationProps = {
	totalPages: number
	currentPage: number
	onPreviousPage: () => void
	onNextPage: () => void
	onPageNumber: (pageNumber: number) => void
}

export const Pagination: FC<TPaginationProps> = ({totalPages = 10, currentPage, onPreviousPage, onNextPage, onPageNumber}) => {
	return (
		<div className={styles.pagination}>
			<button
				className={styles.arrow}
				onClick={onPreviousPage}
				disabled={currentPage <= 1}
			>{'<'}</button>
			<div className={styles.list}>
				{[...Array(totalPages)].map((_, idx) => {
					return (
						<button
							key={idx}
							className={styles.pageNumber}
							onClick={() => onPageNumber(idx + 1)}
							disabled={idx + 1 === currentPage}
						>
							{idx + 1}
						</button>
					)
				})}
			</div>
			<button
				className={styles.arrow}
				onClick={onNextPage}
				disabled={currentPage >= 10}
			>{'>'}</button>
		</div>
	)
}
