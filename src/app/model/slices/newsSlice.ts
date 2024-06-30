import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {TFilters, TNewsItem} from '../../../shared'
import {PAGE_SIZE} from '../../../constants'

type TState = {
	news: TNewsItem[],
	filters: TFilters
}

const initialState: TState = {
	news: [],
	filters: {
		page_number: 1,
		page_size: PAGE_SIZE,
		category: null,
		keywords: ''
	}
}

export const newsSlice = createSlice({
	name: 'news',
	initialState,
	reducers: {
		setNews: (state, action: PayloadAction<TNewsItem[]>) => {
			state.news = action.payload
		},
		setFilters: (state, action: PayloadAction<{ key: string, value: number | string | null }>) => {
			const {key, value} = action.payload
			state.filters = {...state.filters, [key]: value}
		},
	},
})

export const {setNews, setFilters} = newsSlice.actions

export const newsReducer = newsSlice.reducer