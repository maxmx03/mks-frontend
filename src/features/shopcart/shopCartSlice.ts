import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface Product {
  id: number
  name: string
  brand: string
  description: string
  price: string
  photo: string
  updatedAt: string
}

interface ShopCartState {
  items: Product[]
}

const initialState: ShopCartState = {
  items: [],
}

export const shopCartSlice = createSlice({
  name: 'shopcart',
  initialState,
  reducers: {
    setShopCartItem: (state: ShopCartState, action: PayloadAction<Product>) => {
      state.items.push(action.payload)
    },
  },
})

export const { setShopCartItem } = shopCartSlice.actions

export const selectShopCartItem = (state: RootState) => state.shopcart.items
