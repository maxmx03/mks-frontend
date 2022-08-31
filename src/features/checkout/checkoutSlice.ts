import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { formatPrice } from '../../utils'
import { ShopCartItem } from '../shopcart/shopCartSlice'

interface CheckoutState {
  isOpen: boolean
  amount: number
}

const initialState: CheckoutState = {
  isOpen: false,
  amount: 0,
}

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    onToggle: (state: CheckoutState) => {
      state.isOpen = !state.isOpen
    },
    increaseAmount: (
      state: CheckoutState,
      action: PayloadAction<ShopCartItem>
    ) => {
      const product = action.payload

      state.amount += formatPrice(product.price)
    },
    decreaseAmount: (
      state: CheckoutState,
      action: PayloadAction<ShopCartItem>
    ) => {
      const product = action.payload

      state.amount -= formatPrice(product.price)
    },
    removeItemsAmount: (
      state: CheckoutState,
      action: PayloadAction<{ product: ShopCartItem; products: ShopCartItem[] }>
    ) => {
      const productToRemove = action.payload.product
      const products = action.payload.products
      const shopCartItem = products.filter(
        (p) => p.id === productToRemove.id
      )[0]
      state.amount =
        state.amount - formatPrice(shopCartItem.price) * shopCartItem.quantity
    },
  },
})

export const { onToggle, decreaseAmount, increaseAmount, removeItemsAmount } =
  checkoutSlice.actions

export const selectIsOpen = (state: RootState) => state.checkout.isOpen
export const selectAmount = (state: RootState) => state.checkout.amount
