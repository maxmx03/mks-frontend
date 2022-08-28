import {
  Button,
  Flex,
  Grid,
  GridItem,
  Text,
  Image,
  Box,
} from '@chakra-ui/react'
import { Icon } from '../atoms'

interface ProductProps {
  id: number
  name: string
  brand: string
  description: string
  price: string
  photo: string
  updatedAt: string
}

const Product = ({ name, price, description, photo }: ProductProps) => (
  <Grid
    templateRows="134px 17% 17% auto"
    gap="3"
    bg="white"
    boxShadow="md"
    rounded="md"
  >
    <GridItem
      justifySelf="center"
      alignSelf="center"
      as={Image}
      src={photo}
      alt="photo"
      boxSize="134"
    />
    <GridItem as={Flex} justifyContent="space-between" gap="5" mx="3">
      <Text color="black" fontSize="1rem">
        {name}
      </Text>
      <Button color="white" bg="black.100" size="sm">
        R$ {Math.abs(+price - 1)}
      </Button>
    </GridItem>
    <GridItem mx="3">
      <Text color="black" fontSize="0.625rem">
        {description}
      </Text>
    </GridItem>
    <GridItem as="button" color="white" bg="blue" roundedBottom="md">
      <Flex justifyContent="center" alignItems="center">
        <Icon src="/shopping-bag.svg" alt="shopping-bar" />
        <Box as="span" ml={1}>
          Comprar
        </Box>
      </Flex>
    </GridItem>
  </Grid>
)

export default Product
