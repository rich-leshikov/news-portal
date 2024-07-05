import {ComponentType} from 'react'
import {Skeleton} from '@/shared'
import {TDirection, TSkeleton} from '../types'

type Props = {
	direction?: TDirection
	isLoading: boolean
	type?: TSkeleton
}

export const withSkeleton = <P extends object>(Component: ComponentType<P>, count?: number) => {
	return (props: Props & P) => {
		const {direction = 'column', isLoading, type, ...restProps} = props

		if (isLoading) {
			return <Skeleton type={type} count={count} direction={direction}/>
		}

		return <Component {...(restProps as P)}/>
	}
}