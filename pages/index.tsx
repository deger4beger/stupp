import type { NextPage } from "next"
import Header from "../components/header"
import { useTheme } from "../providers/theme"

const Home: NextPage = () => {

  const { theme } = useTheme()

  return (
    <div className={theme === "dark" ? "dark" : undefined}>
      <div className="min-h-screen min-w-full font-mono bg-zinc-200
        text-dark dark:bg-zinc-900 dark:text-white">
        <Header />
        <div className="min-h-screen">

        </div>
      </div>
    </div>
  )
}

export default Home
