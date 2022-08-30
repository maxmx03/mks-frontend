import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import Product from '../product'

interface ShopCartItem {
  id: number
  name: string
  brand: string
  description: string
  price: string
  photo: string
  updatedAt: string
  quantity: number
}

interface ShopCartState {
  items: ShopCartItem[]
  total: number
}

const initialState: ShopCartState = {
  items: [],
  total: 0,
}

export const shopCartSlice = createSlice({
  name: 'shopcart',
  initialState,
  reducers: {
    rmCartItem: (state: ShopCartState, action: PayloadAction<Product>) => {
      const product = action.payload
      const shopcartItem = state.items.filter((item) => item.id === product.id)

      if (shopcartItem.length > 0) {
        state.items = state.items.map((item) => {
          if (item.id === shopcartItem[0].id) {
            return {
              ...item,
              quantity: item.quantity && item.quantity - 1,
            }
          }

          return item
        })

        state.items = state.items.filter(item => item.quantity > 0)
      }
    },
    addCartItem: (state: ShopCartState, action: PayloadAction<Product>) => {
      const product = action.payload
      const shopcartItem = state.items.filter((item) => item.id === product.id)

      if (shopcartItem.length == 0) {
        state.items.push({ ...product, quantity: 1 })
      } else {
        state.items = state.items.map((item) => {
          if (item.id === shopcartItem[0].id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            }
          }

          return item
        })
      }
    },
    sumShopCartItems: (state: ShopCartState) => {
      let total = 0

      state.items.forEach((item) => {
        total += item.quantity
      })

      state.total = total
    },
  },
})

export const { addCartItem, rmCartItem, sumShopCartItems } =
  shopCartSlice.actions

export const selectCartItems = (state: RootState) => state.shopcart.items
export const selectShopCartTotal = (state: RootState) => state.shopcart.total
