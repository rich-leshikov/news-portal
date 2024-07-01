import {useTheme} from '@/app';
import {Header} from '@/components';
import {Main} from '@/pages';

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