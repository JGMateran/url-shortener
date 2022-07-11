import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ShortenUrlProvider } from '@/store/ShortenUrlStore'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ShortenUrlProvider>
      <Component {...pageProps} />
    </ShortenUrlProvider>
  )
}

export default MyApp
