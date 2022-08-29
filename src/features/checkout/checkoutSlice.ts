import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface CheckoutState {
  isOpen: boolean
}

const initialState: CheckoutState = {
  isOpen: false,
}

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    onToggle: (state: CheckoutState) => {
      state.isOpen = !state.isOpen
    },
  },
})

export const { onToggle } = checkoutSlice.actions

export const selectIsOpen = (state: RootState) => state.checkout.isOpen
