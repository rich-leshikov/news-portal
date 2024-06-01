export type TNews = {
	page_number: number
	page_size: number
	category: string | null
	keywords: string | null
}

export type TBanner = {
	image: string
	title: string
	timePublished: string
	author: string
}

export type TNewsItem = {
	author: string
	category?: unknown[]
	description?: string
	id: string
	image?: string
	language?: string
	published: string
	title: string
	url: string
}

export type TNewsItemResponse = {
	news: TNewsItem[]
	page: number
	status: string
}