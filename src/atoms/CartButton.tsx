import { Button, Flex } from '@chakra-ui/react'
import { Icon } from '../atoms'

const CartButton = () => (
  <Flex as={Button} gap="2" size={{ base: 'sm', md: 'md' }}>
    <Icon src="/shopcart.svg" alt="shop cart" />
    <span>0</span>
  </Flex>
)

export default CartButton
