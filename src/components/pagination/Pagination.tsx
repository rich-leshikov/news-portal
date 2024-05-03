import {FC} from 'react'

import styles from './Pagination.module.scss'

type Props = {
	totalPages: number
	currentPage: number
	onPreviousPage: () => void
	onNextPage: () => void
	onPageNumber: (pageNumber: number) => void
}

export const Pagination: FC<Props> = ({totalPages = 10, currentPage, onPreviousPage, onNextPage, onPageNumber}) => {
	return (
		<div className={styles.pagination}>
			<button className={styles.arrow} onClick={onPreviousPage}>{'<'}</button>
			<div className={styles.list}>
				{[...Array(totalPages)].map((_, idx) => {
					return (
						<button key={idx} className={styles.pageNumber} onClick={() => onPageNumber(idx + 1)}>
							{idx + 1}
						</button>
					)
				})}
			</div>
			<button className={styles.arrow} onClick={onNextPage}>{'>'}</button>
		</div>
	)
}
