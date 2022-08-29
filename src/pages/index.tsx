import { Grid, GridItem } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Footer, Layout, TopBar } from '../components'
import Checkout from '../features/checkout'
import Products from '../features/product'
import { fetchProduct } from '../features/product/productSlice'

const Home: NextPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProduct())
  }, [dispatch])

  return (
    <Layout title="MKS Sistemas">
      <Grid
        templateAreas={`
        "topbar topbar"
        "main main"
        "footer footer"
      `}
        gridTemplateRows="6.5rem auto 3.5rem"
        minH="full"
        minW="full"
        bg="white.200"
      >
        <GridItem as="header" area="topbar" bg="blue" p="5">
          <TopBar />
        </GridItem>
        <GridItem as="main" area="main">
          <Products />
        </GridItem>
        <GridItem as="footer" area="footer" bg="white.100">
          <Footer />
        </GridItem>
      </Grid>
      <Checkout />
    </Layout>
  )
}

export default Home
