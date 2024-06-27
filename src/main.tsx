import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {ThemeProvider} from './context'
import {App, store} from './app'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<Provider store={store}>
				<App/>
			</Provider>
		</ThemeProvider>
	</React.StrictMode>,
)
