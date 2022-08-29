import { Button, Flex } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { Icon } from '../atoms'
import { onToggle } from '../features/checkoutSlice'

const CartButton = () => {
  const dispatch = useDispatch()

  function onOpen() {
    dispatch(onToggle())
  }

  return (
    <Flex as={Button} onClick={onOpen} gap="2" size={{ base: 'sm', md: 'md' }}>
      <Icon src="/shopcart.svg" alt="shop cart" />
      <span>0</span>
    </Flex>
  )
}

export default CartButton
