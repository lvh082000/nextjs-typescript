import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import { axiosClient } from '@/api'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: true}}>
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
