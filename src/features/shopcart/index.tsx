import { Button, Flex } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '../../atoms'
import { onToggle } from '../checkout/checkoutslice'
import {
  selectCartItems,
  selectShopCartQuantity,
  addQuantity,
} from './shopcartslice'

const CartButton = () => {
  const dispatch = useDispatch()
  const shopCartItems = useSelector(selectCartItems)
  const quantity = useSelector(selectShopCartQuantity)

  useEffect(() => {
    dispatch(addQuantity())
  }, [dispatch, shopCartItems])

  function onOpen() {
    dispatch(onToggle())
  }

  return (
    <Flex as={Button} onClick={onOpen} gap="2" size={{ base: 'sm', md: 'md' }}>
      <Icon src="/shopcart.svg" alt="shop cart" />
      <span>{quantity}</span>
    </Flex>
  )
}

export default CartButton
