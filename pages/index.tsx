import type { NextPage } from 'next'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/counterSlice'
import type { RootState } from '../app/store'
import { Box } from '@chakra-ui/react'

const Home: NextPage = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <Box
      height="full"
      width="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </Box>
  )
}

export default Home
