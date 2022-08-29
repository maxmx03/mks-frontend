import { Grid } from '@chakra-ui/react'
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
  const { data, isLoading, isError } = useProduct()

  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

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
        data.map((product: Product, index: number) => (
          <Product product={product} key={index} />
        ))}
    </Grid>
  )
}

export default Products
