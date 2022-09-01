import { Flex, Spacer } from '@chakra-ui/react'
import { Brand } from '../atoms'
import ShopCart from '../features/shopcart'

const TopBar = () => (
  <Flex alignItems="center" h="full" w="full">
    <Brand />
    <Spacer />
    <ShopCart />
  </Flex>
)

export default TopBar
