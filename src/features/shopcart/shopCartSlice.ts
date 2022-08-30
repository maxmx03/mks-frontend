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
  quantity: number
  amount: number
}

const initialState: ShopCartState = {
  items: [],
  quantity: 0,
  amount: 0,
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

        state.items = state.items.filter((item) => item.quantity > 0)
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
    addAmount: (state: ShopCartState, action: PayloadAction<Product>) => {
      const product = action.payload

      state.amount += +product.price
    },
    rmAmount: (state: ShopCartState, action: PayloadAction<Product>) => {
      const product = action.payload 

      state.amount -= +product.price
    },
    addQuantity: (state: ShopCartState) => {
      let quantity = 0

      state.items.forEach((item) => {
        quantity += item.quantity
      })

      state.quantity = quantity
    },
  },
})

export const { addCartItem, rmCartItem, addAmount, addQuantity, rmAmount } = shopCartSlice.actions

export const selectCartItems = (state: RootState) => state.shopcart.items
export const selectShopCartQuantity = (state: RootState) =>
  state.shopcart.quantity
export const selectShopCartAmount = (state: RootState) => state.shopcart.amount
