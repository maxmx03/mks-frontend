import {
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  Box,
  Button,
} from '@chakra-ui/react'
import { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { Icon } from '../../atoms'
import { setShopCartItem } from '../shopcart/shopCartSlice'

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

  function handleClick(product: Product) {
    dispatch(setShopCartItem(product))
  }

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
              <GridItem justifySelf="center" alignSelf="center">
                <Image src={product.photo} alt={product.name} boxSize="134" />
              </GridItem>
              <GridItem as={Flex} justifyContent="space-between" gap="5" mx="3">
                <Fragment>
                  <Text color="black" fontSize="1rem">
                    {product.name}
                  </Text>
                  <Button color="white" bg="black.100" size="sm">
                    R$ {Math.abs(+product.price - 1)}
                  </Button>
                </Fragment>
              </GridItem>
              <GridItem mx="3">
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
