import type { NextPage } from "next"
import Header from "../components/header"
import { useTheme } from "../providers/theme"

const Home: NextPage = () => {

  const { theme } = useTheme()

  return (
    <div className={theme === "dark" ? "dark" : undefined}>
      <div className="min-h-screen min-w-full bg-zinc-900 font-mono text-white">
        <Header />
      </div>
    </div>
  )
}

export default Home
