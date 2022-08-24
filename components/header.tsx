import { useTheme } from "../providers/theme"

const Header = () => {

	// const { switchTheme } = useTheme()

	return (
		<div className="flex justify-center p-2 bg-gray-800 text-white relative">
	    <div>
	    	! This is the place for some info
	    </div>
	    {/*<div className="absolute top-2 right-4 cursor-pointer select-none" onClick={switchTheme}>
	    	 🌓🌑🌕🌘🌖
	    </div>*/}
	  </div>
	)
}

export default Header

