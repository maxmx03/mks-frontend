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
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { onToggle, selectIsOpen } from '../features/checkoutSlice'

const Checkout = () => {
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
      size={{ base: "full", md: "md" }}
    >
      <DrawerOverlay />
      <DrawerContent bg="blue">
        <DrawerCloseButton bg="black" color="white" rounded="full" />
        <DrawerBody>
          <Text fontSize="1.688rem" fontWeight="bold" color="white">
            Carrinho de compras
          </Text>
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
