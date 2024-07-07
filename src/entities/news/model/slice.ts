import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {TNewsItem} from '@/entities'
import {PAGE_SIZE, TFilters} from '@/shared'

type TState = {
	currentNews: TNewsItem | null
	news: TNewsItem[],
	filters: TFilters
}

const initialState: TState = {
	currentNews: null,
	news: [],
	filters: {
		page_number: 1,
		page_size: PAGE_SIZE,
		category: null,
		keywords: ''
	}
}

export const slice = createSlice({
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
		setCurrentNews: (state, action: PayloadAction<TNewsItem | null>) => {
			state.currentNews = action.payload
		},
	},
})

export const {setNews, setFilters, setCurrentNews} = slice.actions

export const newsReducer = slice.reducer