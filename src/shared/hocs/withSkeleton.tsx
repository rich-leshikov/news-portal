import {Skeleton} from '../../components'

export const withSkeleton = (Component: any, type: 'banner' | 'item', count: number, direction: 'row' | 'column') => {
	return (props: any) => {
		const {isLoading, ...restProps} = props

		if (isLoading) {
			return <Skeleton type={type} count={count} direction={direction}/>
		}

		return <Component {...restProps}/>
	}
}