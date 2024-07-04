import {FC} from 'react'
import {themeIcons} from '@/shared'
import {useTheme} from '@/app'

export const ThemeButton: FC = () => {
	const {isDark, toggleTheme} = useTheme()

	return (
		<img
			src={isDark ? themeIcons.light : themeIcons.dark}
			alt="theme icon"
			width={30}
			onClick={toggleTheme}
		/>
	)
}
