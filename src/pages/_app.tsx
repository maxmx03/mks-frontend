import '@fontsource/montserrat'
import '@fontsource/montserrat/300.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/900.css'
import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import theme from '../theme'
import store from '../app/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp
