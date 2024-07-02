import {combineReducers} from '@reduxjs/toolkit'
import {categoriesApi, newsApi, newsReducer} from '@/entities'

export const rootReducer = combineReducers({
	news: newsReducer,
	[categoriesApi.reducerPath]: categoriesApi.reducer,
	[newsApi.reducerPath]: newsApi.reducer,
})