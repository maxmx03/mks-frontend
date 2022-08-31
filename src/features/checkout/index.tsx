import {
  Text,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Spacer,
  Flex,
  Box,
  Grid,
  GridItem,
  Image,
  IconButton,
  CloseButton,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { formatPrice } from '../../utils'
import { Product } from '../product/productSlice'
import {
  increaseCartItem,
  decreaseCartItem,
  selectCartItems,
  removeCartItem,
} from '../shopcart/shopCartSlice'
import {
  addAmount,
  onToggle,
  rmAmount,
  selectIsOpen,
  selectAmount,
} from './checkoutSlice'

const Checkout = () => {
  const shopCartItems = useSelector(selectCartItems)
  const amount = useSelector(selectAmount)
  const isOpen = useSelector(selectIsOpen)
  const dispatch = useDispatch()

  function onClose() {
    dispatch(onToggle())
  }

  function handlePlusClick(product: Product) {
    dispatch(increaseCartItem(product))
    dispatch(addAmount(product))
  }

  function handleMinusClick(product: Product) {
    dispatch(decreaseCartItem(product))
    dispatch(rmAmount(product))
  }

  function handleCloseButton(product: Product) {
    dispatch(removeCartItem(product))
  }

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      size={{ base: 'full', md: 'md' }}
    >
      <DrawerOverlay />
      <DrawerContent bg="blue">
        <DrawerCloseButton bg="black" color="white" rounded="full" />
        <DrawerBody>
          <Box mb="20">
            <Text fontSize="1.688rem" fontWeight="bold" color="white">
              Carrinho de compras
            </Text>
          </Box>
          {shopCartItems.map((item, index) => {
            return (
              <Grid
                key={index}
                gridTemplateColumns="auto 113px auto auto"
                h="101"
                mt="5"
                bg="white"
                rounded="xl"
              >
                <GridItem justifySelf="center" alignSelf="center">
                  <Image
                    as={Image}
                    src={item.photo}
                    alt={item.name}
                    boxSize="54"
                  />
                </GridItem>
                <GridItem justifySelf="center" alignSelf="center">
                  <Text color="black" fontSize="0.625rem">
                    {item.name}
                  </Text>
                </GridItem>
                <GridItem
                  as={Flex}
                  justifyContent="center"
                  alignItems="center"
                  gap="1"
                >
                  <Button size="sm" onClick={() => handleMinusClick(item)}>
                    -
                  </Button>
                  <span>{item.quantity}</span>
                  <Button size="sm" onClick={() => handlePlusClick(item)}>
                    +
                  </Button>
                </GridItem>
                <GridItem
                  as={Grid}
                  gridTemplateAreas={`
                  "price btn"
                  "price btn"
                `}
                  gridTemplateColumns="auto 40px"
                >
                  <GridItem
                    as={Flex}
                    justifyContent="center"
                    alignItems="center"
                    area="price"
                  >
                    <Text fontSize="sm" fontWeight="bold" color="black">
                      R$ {formatPrice(item.price)}
                    </Text>
                  </GridItem>
                  <GridItem
                    as={Flex}
                    position="relative"
                    justifyContent="center"
                    area="btn"
                  >
                    <IconButton
                      aria-label="remove cartitem"
                      icon={
                        <CloseButton
                          bg="black"
                          _hover={{ bg: 'black.50' }}
                          rounded="full"
                          color="white"
                        />
                      }
                      size="sm"
                      position="absolute"
                      top="-3"
                      right="-3"
                      rounded="full"
                      onClick={() => handleCloseButton(item)}
                    />
                  </GridItem>
                </GridItem>
              </Grid>
            )
          })}
        </DrawerBody>
        <DrawerFooter p="0">
          <Flex flexDirection="column" w="full">
            <Flex m="10">
              <Text fontSize="1.75rem" fontWeight="bold" color="white">
                Total
              </Text>
              <Spacer />
              <Text fontSize="1.75rem" fontWeight="bold" color="white">
                R$ {amount}
              </Text>
            </Flex>
            <Button
              fontWeight="bold"
              fontSize="2xl"
              bg="black"
              color="white"
              h="97"
              w="full"
              _hover={{ bg: 'black.50' }}
            >
              Finalizar Compra
            </Button>
          </Flex>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default Checkout
