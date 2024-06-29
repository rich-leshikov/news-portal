import {configureStore} from '@reduxjs/toolkit'
import {useDispatch, useSelector} from 'react-redux'
import {newsReducer} from './slices'
import {newsApi} from './services'

export const store = configureStore({
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsApi.middleware),
	reducer: {
		news: newsReducer,
		[newsApi.reducerPath]: newsApi.reducer
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()