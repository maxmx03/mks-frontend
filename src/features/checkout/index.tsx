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
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { selectShopCartItem } from '../shopcart/shopCartSlice'
import { onToggle, selectIsOpen } from './checkoutSlice'

const Checkout = () => {
  const shopCartItems = useSelector(selectShopCartItem)
  const isOpen = useSelector(selectIsOpen)
  const dispatch = useDispatch()

  function onClose() {
    dispatch(onToggle())
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
                <GridItem as={Flex} justifyContent="center" alignItems="center" gap="1">
                  <Button size="sm">-</Button>
                  <span>{item.quantity}</span>
                  <Button size="sm">+</Button>
                </GridItem>
                <GridItem as={Flex} justifyContent="center" alignItems="center">
                <Text fontSize="0.875rem" fontWeight="bold">R${Math.abs(+item.price - 1)}</Text>
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
                R$ 798
              </Text>
            </Flex>
            <Button
              fontWeight="bold"
              fontSize="2xl"
              bg="black"
              color="white"
              h="97"
              w="full"
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
