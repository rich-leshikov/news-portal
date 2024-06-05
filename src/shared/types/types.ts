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

export type TCategoriesItem =
	| "regional"
	| "technology"
	| "lifestyle"
	| "business"
	| "general"
	| "programming"
	| "science"
	| "entertainment"
	| "world"
	| "sports"
	| "finance"
	| "academia"
	| "politics"
	| "health"
	| "opinion"
	| "food"
	| "game"
	| "fashion"
	| "academic"
	| "crap"
	| "travel"
	| "culture"
	| "economy"
	| "environment"
	| "art"
	| "music"
	| "notsure"
	| "CS"
	| "education"
	| "redundant"
	| "television"
	| "commodity"
	| "movie"
	| "entrepreneur"
	| "review"
	| "auto"
	| "energy"
	| "celebrity"
	| "medical"
	| "gadgets"
	| "design"
	| "EE"
	| "security"
	| "mobile"
	| "estate"
	| "funny"

export type TCategoriesApiResponse = {
	categories: TCategoriesItem[]
	description: string
	status: string
}

export type TFilters = {
	page_number: number
	page_size: number
	category: string | null
	keywords: string | null
}

export type TParams = Partial<TFilters>

export type TBanner = {
	image: string
	title: string
	timePublished: string
	author: string
}

