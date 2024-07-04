import {FC, ReactNode} from 'react'
import {PaginationButtons} from '../pagination-buttons'
import {TPagination} from '../../model'

type Props = {
	top?: boolean
	bottom?: boolean
	children: ReactNode
}

export const Pagination: FC<Props & TPagination> = ({top, bottom, children, ...paginationProps}) => {
	return (
		<>
			{top && <PaginationButtons  {...paginationProps}/>}
			{children}
			{bottom && <PaginationButtons {...paginationProps}/>}
		</>
	)
}
