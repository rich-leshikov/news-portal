import { configureStore } from '@reduxjs/toolkit'
import {useDispatch, useSelector} from 'react-redux'

export const store = configureStore({
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
	reducer: {
		// news: newsReducer
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()