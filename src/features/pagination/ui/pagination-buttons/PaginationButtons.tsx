import {FC} from 'react'
import {useTheme} from '@/app'
import {TPagination} from '../../model'

import styles from './styles.module.scss'

export const PaginationButtons: FC<TPagination> = ({totalPages = 10, currentPage, onPreviousPage, onNextPage, onPageNumber}) => {
	const {isDark} = useTheme()

	return (
		<div className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}>
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
