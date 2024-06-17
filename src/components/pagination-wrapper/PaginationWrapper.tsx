import {FC, ReactNode} from 'react'
import {Pagination, TPaginationProps} from '../pagination'

type Props = {
	isDark: boolean
	top?: boolean
	bottom?: boolean
	children: ReactNode
}

export const PaginationWrapper: FC<Props & TPaginationProps> = ({isDark, top, bottom, children, ...paginationProps}) => {
	return (
		<>
			{top && <Pagination	isDark={isDark} {...paginationProps}/>}
			{children}
			{bottom && <Pagination isDark={isDark} {...paginationProps}/>}
		</>
	)
}
