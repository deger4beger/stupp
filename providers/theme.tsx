import React, { useContext, useLayoutEffect, useState } from "react"

const themeContext = React.createContext({
	theme: "dark" as "dark" | "light",
	switchTheme: () => {}
})

const ThemeProvider = ({
	children
}: {
	children: React.ReactNode
}) => {

	const [theme, setTheme] = useState<"dark" | "light">("dark")

	const switchTheme = () => {
		if (localStorage.theme === "light" ) {
		  document.documentElement.classList.add("dark")
		  localStorage.theme = "dark"
		  setTheme("dark")
		} else {
		  document.documentElement.classList.remove("dark")
		  localStorage.theme = "light"
		  setTheme("light")
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