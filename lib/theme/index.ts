import { extendTheme } from '@chakra-ui/react'
import Button from './components/Button'
import colors from './colors'

export const theme = extendTheme({
  colors,
  components: {
    Button,
  },
})
