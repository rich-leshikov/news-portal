import {Outlet} from 'react-router-dom'
import {useTheme} from '@/app'
import {Header} from '@/widgets'

export const BaseLayout = () => {
	const {isDark} = useTheme()

	return (
		<div className={`app ${isDark ? 'dark' : 'light'}`}>
			<Header/>
			<div className="container">
				<Outlet/>
			</div>
		</div>
	)
}