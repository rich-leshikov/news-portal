import {Header} from './components'
import {Main} from './pages'

export const App = () => {
	return (
		<>
			<Header/>
			<div className="container">
				<Main/>
			</div>
		</>
	)
}
