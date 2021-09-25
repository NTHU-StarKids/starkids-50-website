import '@/styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { AppProps } from 'next/app'

config.autoAddCss = false

function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default App
