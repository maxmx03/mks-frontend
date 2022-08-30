import { Grid } from '@chakra-ui/react'
import { selectProducts } from './productSlice'
import Products from './products'
import { useSelector } from 'react-redux'

interface Product {
  id: number
  name: string
  brand: string
  description: string
  price: string
  photo: string
  updatedAt: string
}

const Product = () => {
  const products = useSelector(selectProducts)

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
      <Products products={products} />
    </Grid>
  )
}

export default Product
