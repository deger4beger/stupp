import React, { useContext, useLayoutEffect, useState } from "react"

type themeType = "default" | "light"

const themeContext = React.createContext({
	theme: "default" as themeType,
	switchTheme: () => {}
})

const ThemeProvider = ({
	children
}: {
	children: React.ReactNode
}) => {

	const [theme, setTheme] = useState<themeType>("default")

	const switchThemeHelper = (theme: themeType) => {
		localStorage.theme = theme
		setTheme(theme)
	}

	const switchTheme = () => {
		if (localStorage.theme === "light" ) {
		  document.documentElement.classList.add("default")
		  switchThemeHelper("default")
		} else {
		  document.documentElement.classList.remove("default")
		  switchThemeHelper("light")
		}
	}

	useLayoutEffect(() => {
		setTheme(localStorage.theme)
	}, [])

	return (
		<themeContext.Provider value={{theme, switchTheme}}>
			{ children }
		</themeContext.Provider>
	)
}

export const useTheme = () => useContext(themeContext)

export default ThemeProvider