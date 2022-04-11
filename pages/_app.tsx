import { axiosClient } from '@/api'
import { EmptyLayout } from '@/components/layout'
import { AppPropsWithLayout } from '@/models'
import { SWRConfig } from 'swr'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout
  
  return (
    <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: true }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  )
}

export default MyApp
