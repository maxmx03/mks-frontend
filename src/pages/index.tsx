import type { NextPage } from 'next'
import { Grid, GridItem } from '@chakra-ui/react'
import { Checkout, Footer, Layout, Products, TopBar } from '../components'
import useProduct from '../hooks/useProduct'

const Home: NextPage = () => {
  const { data, isLoading, isError } = useProduct()

  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

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
          <Products data={data} />
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
