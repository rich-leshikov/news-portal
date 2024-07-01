import {configureStore} from '@reduxjs/toolkit'
import {useDispatch, useSelector} from 'react-redux'
import {rootReducer} from '@/app/appReducer.ts'
import {newsApi} from '@/app/model';

export const store = configureStore({
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsApi.middleware),
	reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
