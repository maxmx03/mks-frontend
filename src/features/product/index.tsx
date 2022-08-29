import { Grid, Skeleton } from '@chakra-ui/react'
import { selectProducts } from './productSlice'
import Products from './products'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectProductsStatus } from './productSlice'

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
  const [isLoaded, setIsLoaded] = useState(false)
  const status = useSelector(selectProductsStatus)

  useEffect(() => {
    if (status === 'loading' || status === 'failed') {
      setIsLoaded(false)
    } else {
      setIsLoaded(true)
    }
  }, [status, isLoaded])

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
      {!isLoaded ? <Skeleton /> : <Products products={products} />}
    </Grid>
  )
}

export default Product
