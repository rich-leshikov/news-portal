import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {TNewsItem} from '../../../shared'

type TState = {
	news: TNewsItem[]
}

const initialState: TState = {
	news: []
}

export const newsSlice = createSlice({
	name: 'news',
	initialState,
	reducers: {
		setNews: (state, action: PayloadAction<TNewsItem[]>) => {
			state.news = action.payload
		},
	},
})

export const { setNews } = newsSlice.actions

export const newsReducer = newsSlice.reducer