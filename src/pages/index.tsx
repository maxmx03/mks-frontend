import type { NextPage } from 'next'
import { Fragment } from 'react'
import Counter from '../features/Counter'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Counter />
    </Fragment>
  )
}

export default Home
