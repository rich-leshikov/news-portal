import {TCategoriesItem} from '@/entities'

export type TNewsItem = {
	author: string
	category?: TCategoriesItem[]
	description?: string
	id: string
	image?: string
	language?: string
	published: string
	title: string
	url: string
}

export type TNewsApiResponse = {
	news: TNewsItem[]
	page: number
	status: string
}