import {Header} from './components'
import {Main} from './pages'
import {useState} from 'react'

export const App = () => {
	const [isDark, setIsDark] = useState(true)

	return (
		<div className={`app ${isDark ? 'dark' : 'light'}`}>
			<Header isDark={isDark}/>
			<div className="container">
				<Main/>
			</div>
		</div>
	)
}
