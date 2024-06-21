import {createContext, FC, ReactNode, useContext, useState} from 'react'

type TThemeContext = {
	isDark: boolean
	toggleTheme: () => void
}

type TThemeProviderProps = {
	children: ReactNode
}

export const ThemeContext = createContext<TThemeContext | undefined>(undefined)

export const useTheme = () => {
	const context = useContext(ThemeContext)

	if (!context) {
		throw new Error('context error')
	}

	return context
}

export const ThemeProvider: FC<TThemeProviderProps> = ({children}) => {
	const [isDark, setIsDark] = useState(false)

	const toggleTheme = () => setIsDark(prev => !prev)

	return (
		<ThemeContext.Provider value={{isDark, toggleTheme}}>
			{children}
		</ThemeContext.Provider>
	)
}