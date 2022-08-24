import React, { useContext, useLayoutEffect, useState } from "react"

type themeType = "dark" | "light"

const themeContext = React.createContext({
	theme: "dark" as themeType,
	switchTheme: () => {}
})

const ThemeProvider = ({
	children
}: {
	children: React.ReactNode
}) => {

	const [theme, setTheme] = useState<themeType>("dark")

	const switchThemeHelper = (theme: themeType) => {
		localStorage.theme = theme
		setTheme(theme)
	}

	const switchTheme = () => {
		if (localStorage.theme === "light" ) {
		  document.documentElement.classList.add("dark")
		  switchThemeHelper("dark")
		} else {
		  document.documentElement.classList.remove("dark")
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