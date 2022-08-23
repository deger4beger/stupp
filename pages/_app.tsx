import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Hydrate, QueryClientProvider } from "react-query"
import { queryClient } from "../src"
import ThemeProvider from "../providers/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
