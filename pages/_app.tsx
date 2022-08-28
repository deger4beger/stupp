import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Hydrate, QueryClientProvider } from "react-query"
import { queryClient } from "../src"
import Wrapper from "../src/components/wrapper"
import ThemeProvider from "../src/providers/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider>
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
