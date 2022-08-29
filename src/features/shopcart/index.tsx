import { Button, Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '../../atoms'
import { onToggle } from '../checkout/checkoutSlice'
import { selectShopCartItem } from './shopCartSlice'

const CartButton = () => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(0)
  const shopCartItem = useSelector(selectShopCartItem)

  useEffect(() => {
    setQuantity((qt) => {
      if (shopCartItem && shopCartItem.length > 0) {
        return shopCartItem.length
      }

      return qt
    })
  }, [shopCartItem])

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
