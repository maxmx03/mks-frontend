import { Grid } from '@chakra-ui/react'
import Product from './Product'

interface Product {
  id: number
  name: string
  brand: string
  description: string
  price: string
  photo: string
  updatedAt: string
}

interface ProductsProps {
  data: Product[]
}

const Products: React.FC<ProductsProps> = ({ data }) => (
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
        <Product {...product} key={index} />
      ))}
  </Grid>
)

export default Products
