import React from 'react'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import {appRouter, store, ThemeProvider} from '@/app'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<Provider store={store}>
				<RouterProvider router={appRouter} />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>,
)