import type { NextPage } from 'next'
import Image from 'next/image'
import { Grid, GridItem, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Footer, Layout, TopBar } from '../components'

type Products = {
  id: number
  name: string
  brand: string
  description: string
  price: string
  photo: string
  updatedAt: string
}

const Home: NextPage = () => {
  const [products, setProducts] = useState<Products[]>([])

  useEffect(() => {
    const url =
      'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=ASC'
    const abortController = new AbortController()
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      signal: abortController.signal,
    }

    async function getProducts(url: string, options: object) {
      const response = await fetch(url, options)
      const obj = await response.json()

      setProducts(obj.products)
    }

    getProducts(url, options)

    return () => {
      abortController.abort()
    }
  }, [])

  return (
    <Layout title="MKS Sistemas">
      <Grid
        templateAreas={`
        "topbar topbar"
        "main main"
        "footer footer"
      `}
        gridTemplateColumns="auto"
        gridTemplateRows="6.5rem auto 3.5rem"
        h="full"
        w="full"
        bg="white.100"
      >
        <GridItem as="header" area="topbar" bg="blue" p="5">
          <TopBar />
        </GridItem>
        <GridItem as="main" area="main">
          <Grid
            templateColumns="repeat(6, 300px)"
            gap="22"
            justifyContent="center"
            alignItems="center"
            w="full"
            h="full"
          >
            {products &&
              products.map((product) => (
                <GridItem
                  display="grid"
                  justifyItems="center"
                  alignItems="center"
                  key={product.id}
                  w="218"
                  h="285"
                  bg="white"
                >
                  <Grid
                    templateAreas={`
                    "img img"
                    "desc desc"
                    "btn btn"
                    `}
                    justifyItems="center"
                    gridTemplateRows="100px 26px 32px"
                    gap="5"
                  >
                    <GridItem area="img" justifyItems="center">
                      <Image
                        src={product.photo}
                        alt={product.name}
                        priority
                        height="111"
                        width="136"
                      />
                    </GridItem>
                    <GridItem area="desc">
                      <p>Description</p>
                    </GridItem>
                    <GridItem area="btn">
                      <button>Button</button>
                    </GridItem>
                  </Grid>
                </GridItem>
              ))}
          </Grid>
        </GridItem>
        <GridItem as="footer" area="footer" bg="white.100">
          <Footer />
        </GridItem>
      </Grid>
    </Layout>
  )
}

export default Home
