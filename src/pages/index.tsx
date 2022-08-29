import { Grid, GridItem } from '@chakra-ui/react'
import { Footer, Layout, Products, TopBar } from '../components'
import Checkout from '../features/checkout'
import { SWRConfig } from 'swr'

interface HomeProps {
  fallback: {
    [key: string]: any
  }
}

const Home: React.FC<HomeProps> = ({ fallback }) => {
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
          <SWRConfig value={{ fallback }}>
            <Products />
          </SWRConfig>
        </GridItem>
        <GridItem as="footer" area="footer" bg="white.100">
          <Footer />
        </GridItem>
      </Grid>
      <Checkout />
    </Layout>
  )
}

export async function getStaticProps() {
  const server = 'http://localhost:3000'
  const url = '/api/product'
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const response = await fetch(server + url, options)
  const data = await response.json()

  return {
    props: {
      fallback: {
        [url]: data,
      },
    },
  }
}

export default Home
