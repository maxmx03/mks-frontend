import {
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  Box,
  Button,
  Skeleton,
} from '@chakra-ui/react'
import { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Icon } from '../../atoms'
import { addAmount, addCartItem } from '../shopcart/shopCartSlice'
import { selectProductsStatus } from './productSlice'
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

interface ProductsProps {
  products: Product[]
}

const Products = ({ products }: ProductsProps) => {
  const dispatch = useDispatch()
  const status = useSelector(selectProductsStatus)
  const [loading, setLoading] = useState(true)

  function handleClick(product: Product) {
    dispatch(addCartItem(product))
    dispatch(addAmount(product))
  }

  useEffect(() => {
    if (status === 'loading' || status === 'failed') {
      setLoading(true)
    } else {
      let timer = setTimeout(() => setLoading(false), 1000)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [status, setLoading])

  return (
    <Fragment>
      {products.length > 0 &&
        products.map((product: Product, index: number) => {
          return (
            <Grid
              key={index}
              templateRows="134px 17% 17% auto"
              gap="3"
              bg="white"
              boxShadow="md"
              rounded="md"
            >
              <GridItem
                as={Skeleton}
                isLoaded={!loading}
                justifySelf="center"
                alignSelf="center"
              >
                <Image src={product.photo} alt={product.name} boxSize="134" />
              </GridItem>
              <GridItem
                as={Skeleton}
                isLoaded={!loading}
                display="flex"
                justifyContent="space-between"
                gap="5"
                mx="3"
              >
                <Text color="black" fontSize="1rem">
                  {product.name}
                </Text>
                <Button color="white" bg="black.100" size="sm">
                  R$ {Math.abs(+product.price - 1)}
                </Button>
              </GridItem>
              <GridItem as={Skeleton} isLoaded={!loading} mx="3">
                <Text color="black" fontSize="0.625rem">
                  {product.description}
                </Text>
              </GridItem>
              <GridItem
                as="button"
                onClick={() => handleClick(product)}
                color="white"
                bg="blue"
                roundedBottom="md"
              >
                <Flex justifyContent="center" alignItems="center">
                  <Icon src="/shopping-bag.svg" alt="shopping-bar" />
                  <Box as="span" ml={1}>
                    Comprar
                  </Box>
                </Flex>
              </GridItem>
            </Grid>
          )
        })}
    </Fragment>
  )
}

export default Products
