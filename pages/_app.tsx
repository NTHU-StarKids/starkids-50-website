import '@/styles/globals.css'
import '@/styles/fonts.css'

import { useEffect } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { config } from '@fortawesome/fontawesome-svg-core'
import { AppProps } from 'next/app'

config.autoAddCss = false

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
})

function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    document.documentElement.lang = 'zh-Hant'
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default App
