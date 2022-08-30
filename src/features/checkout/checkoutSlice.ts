import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { Product } from '../product/productSlice'

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
    addAmount: (state: CheckoutState, action: PayloadAction<Product>) => {
      const product = action.payload

      state.amount += Math.abs(+product.price - 1)
    },
    rmAmount: (state: CheckoutState, action: PayloadAction<Product>) => {
      const product = action.payload

      state.amount -= Math.abs(+product.price - 1)
    },
  },
})

export const { onToggle, addAmount, rmAmount } = checkoutSlice.actions

export const selectIsOpen = (state: RootState) => state.checkout.isOpen
export const selectAmount = (state: RootState) => state.checkout.amount
