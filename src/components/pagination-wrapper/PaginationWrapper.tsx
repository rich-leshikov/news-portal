import {FC, ReactNode} from 'react'
import {Pagination, PaginationProps} from '../pagination'

type Props = {
	top: boolean
	bottom: boolean
	children: ReactNode
}

export const PaginationWrapper: FC<Props & PaginationProps> = ({top, bottom, children, ...paginationProps}) => {
	return (
		<>
			{top && <Pagination {...paginationProps}/>}
			{children}
			{bottom && <Pagination {...paginationProps}/>}
		</>
	)
}
