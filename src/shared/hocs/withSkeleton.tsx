import {Skeleton} from '../../components'

export const withSkeleton = (Component: any, type: 'banner' | 'item', count: number) => {
	return (props: any) => {
		const {isLoading, ...restProps} = props

		if (isLoading) {
			return <Skeleton type={type} count={count}/>
		}

		return <Component {...restProps}/>
	}
}