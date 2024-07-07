import {createBrowserRouter} from 'react-router-dom'
import {BaseLayout} from '@/app/layouts'
import {MainPage, NewsPage} from '@/pages'

export const appRouter = createBrowserRouter([
	{
		element: <BaseLayout/>,
		errorElement: <div>Error</div>,
		children: [
			{path: '/', element: <MainPage/>},
			{path: '/news/:id', element: <NewsPage/>},
		]
	}
])