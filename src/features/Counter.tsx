import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/counterSlice'
import { Box, Button, Text } from '@chakra-ui/react'
import type { RootState } from '../app/store'

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <Box
      height="full"
      width="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Button
        color="white"
        backgroundColor="blue.400"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>
      <Box
        display="flex"
        backgroundColor="blue.400"
        borderRadius="100"
        justifyContent="center"
        alignItems="center"
        width="10"
        height="10"
        m="5"
      >
     <Text color="white" fontSize="2xl" aria-label="count">{count}</Text> 
      </Box>
      <Button
        color="white"
        backgroundColor="blue.400"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </Button>
    </Box>
  )
}
