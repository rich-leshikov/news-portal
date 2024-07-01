import {combineReducers} from '@reduxjs/toolkit'
import {newsApi, newsReducer} from '@/app/model'

export const rootReducer = combineReducers({
	news: newsReducer,
	[newsApi.reducerPath]: newsApi.reducer
})