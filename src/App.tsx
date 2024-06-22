import {Header} from './components'
import {Main} from './pages'
import {useTheme} from './context'

export const App = () => {
	const {isDark} = useTheme()

	return (
		<div className={`app ${isDark ? 'dark' : 'light'}`}>
			<Header/>
			<div className="container">
				<Main isDark={isDark}/>
			</div>
		</div>
	)
}
