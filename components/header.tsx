import { useTheme } from "../providers/theme"

const Header = () => {

	const { switchTheme } = useTheme()

	return (
		<div className="flex justify-center p-2 bg-zinc-800 relative dark:bg-zinc-100 dark:text-black">
	    <div>
	    	! This is the place for some info
	    </div>
	    <div className="absolute top-2 right-4 cursor-pointer" onClick={switchTheme}>
	    	Switch theme
	    </div>
	  </div>
	)
}

export default Header

