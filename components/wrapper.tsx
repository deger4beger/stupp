import { useTheme } from "../providers/theme"


const Wrapper = ({ children }: {
	children: React.ReactNode
}) => {

	const { theme } = useTheme()

  return (
    <div data-mode={theme === "light" ? "light" : undefined}>
      <div className="min-h-screen min-w-full font-mono bg-zinc-900 text-slate-200">
        <Header />
        <div className="min-h-screen">
          { routes() }
          { children }
        </div>
      </div>
    </div>
  )
}

const Header = () => {
	// const { switchTheme } = useTheme()
	return (
		<div className="flex justify-center p-2 bg-gray-700 relative">
	    <div>
	    	Take note that this is experimental version <span className="underline">0.1</span>
	    </div>
	    {/*<div className="absolute top-2 right-4 cursor-pointer select-none" onClick={switchTheme}>
	    	 🌓🌑🌕🌘🌖
	    </div>*/}
	  </div>
	)
}

const routes = () => {

	const routes = [
    ["Home", "/"],
    ["Some route", "/some"]
  ]

	return routes.map(([name, route]) =>
    <a href={route} key={name} >{ name }</a>
  )
}

export default Wrapper