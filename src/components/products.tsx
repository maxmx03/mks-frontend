import { Grid, Skeleton } from '@chakra-ui/react'
import useProduct from '../hooks/useProduct'
import Product from './product'

interface Product {
  id: number
  name: string
  brand: string
  description: string
  price: string
  photo: string
  updatedAt: string
}

const Products = () => {
  const { data, isLoading } = useProduct()

  function renderProduct(product: Product, key: number) {
    if (isLoading) {
      return <Skeleton />
    }

    return <Product product={product} key={key} />
  }

  return (
    <Grid
      templateColumns={{
        base: 'repeat(2, 218px)',
        md: 'repeat(4, 218px)',
      }}
      templateRows="repeat(2, 285px)"
      justifyContent="center"
      alignContent="center"
      gap="22"
      w="full"
      h="full"
    >
      {data &&
        data.map((product: Product, index: number) =>
          renderProduct(product, index)
        )}
    </Grid>
  )
}

export default Products
