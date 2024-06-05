import {FC, ReactNode} from 'react'
import {Pagination, TPaginationProps} from '../pagination'

type Props = {
	top: boolean
	bottom: boolean
	children: ReactNode
}

export const PaginationWrapper: FC<Props & TPaginationProps> = ({top, bottom, children, ...paginationProps}) => {
	return (
		<>
			{top && <Pagination {...paginationProps}/>}
			{children}
			{bottom && <Pagination {...paginationProps}/>}
		</>
	)
}
