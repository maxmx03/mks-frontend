import { Button, Flex } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '../../atoms'
import { onToggle } from '../checkout/checkoutSlice'
import {
  selectShopCartItem,
  selectShopCartTotal,
  shopCartTotal,
} from './shopCartSlice'

const CartButton = () => {
  const dispatch = useDispatch()
  const shopCartItems = useSelector(selectShopCartItem)
  const total = useSelector(selectShopCartTotal)

  useEffect(() => {
    dispatch(shopCartTotal())
  }, [dispatch, shopCartItems])

  function onOpen() {
    dispatch(onToggle())
  }

  return (
    <Flex as={Button} onClick={onOpen} gap="2" size={{ base: 'sm', md: 'md' }}>
      <Icon src="/shopcart.svg" alt="shop cart" />
      <span>{total}</span>
    </Flex>
  )
}

export default CartButton
