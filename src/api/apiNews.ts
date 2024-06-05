import axios from 'axios'
import {TCategoriesApiResponse, TNewsApiResponse, TParams} from '../shared'

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL
const API_KEY = import.meta.env.VITE_NEWS_API_KEY

export const getNews = async (params?: TParams): Promise<TNewsApiResponse> => {
	try {
		const {page_number = 1, page_size = 10, category, keywords} = params || {}

		const response = await axios.get<TNewsApiResponse>(`${BASE_URL}search`, {
			params: {
				apiKey: API_KEY,
				page_number,
				page_size,
				category,
				keywords
			}
		})

		return response.data
	} catch (error) {
		console.log(error)
		return {news: [], page: 1, status: 'error'}
	}
}

export const getLatestNews = async (): Promise<TNewsApiResponse> => {
	try {
		const response = await axios.get<TNewsApiResponse>(`${BASE_URL}latest-news`, {
			params: {
				apiKey: API_KEY
			}
		})

		return response.data
	} catch (error) {
		console.log(error)
		return {news: [], page: 1, status: 'error'}
	}
}

export const getCategories = async (): Promise<TCategoriesApiResponse> => {
	try {
		const response = await axios.get<TCategoriesApiResponse>(`${BASE_URL}available/categories`, {
			params: {
				apiKey: API_KEY
			}
		})

		return response.data
	} catch (error) {
		console.log(error)
		return {categories: [], description: '', status: 'error'}
	}
}