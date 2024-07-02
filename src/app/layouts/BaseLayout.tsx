import {useTheme} from '@/app'
import {Main} from '@/pages'
import {Header} from '@/widgets'

export const BaseLayout = () => {
	const {isDark} = useTheme()

	return (
		<div className={`app ${isDark ? 'dark' : 'light'}`}>
			<Header/>
			<div className="container">
				<Main/>
			</div>
		</div>
	)
}