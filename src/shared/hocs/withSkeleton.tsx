import {ComponentType} from 'react'
import {Skeleton} from '@/components'
import {TDirection, TSkeleton} from '../types'

type Props = {
	isLoading: boolean
}

export const withSkeleton = <P extends object>(Component: ComponentType<P>, type?: TSkeleton, count?: number, direction?: TDirection) => {
	return (props: Props & P) => {
		const {isLoading, ...restProps} = props

		if (isLoading) {
			return <Skeleton type={type} count={count} direction={direction}/>
		}

		return <Component {...(restProps as P)}/>
	}
}