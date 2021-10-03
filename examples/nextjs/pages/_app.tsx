import 'highlight.js/styles/github-dark.css'
import 'lazysizes'

import { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />
}

export default MyApp
