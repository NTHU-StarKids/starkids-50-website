import '@/styles/globals.css'
import '@/styles/fonts.css'

import { useEffect } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import { AppProps } from 'next/app'

config.autoAddCss = false

function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    document.documentElement.lang = 'zh-Hant'
  }, [])
  return <Component {...pageProps} />
}

export default App
