import { Flex, Spacer } from '@chakra-ui/react'
import { Brand, CartButton } from '../atoms'

const TopBar = () => (
  <Flex alignItems="center" h="full" w="full">
    <Brand />
    <Spacer />
    <CartButton />
  </Flex>
)

export default TopBar
