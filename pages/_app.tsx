import '../styles/style.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>David Richey</title>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
