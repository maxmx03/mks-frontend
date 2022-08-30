import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface Product {
  id: number
  name: string
  brand: string
  description: string
  price: string
  photo: string
  updatedAt: string
}

interface ProductState {
  products: Product[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const initialState: ProductState = {
  products: [],
  status: 'loading',
}

export const fetchProduct = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const response = await fetch(
      'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=ASC',
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    const obj = await response.json()

    return obj.products
  }
)

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProduct.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.status = 'idle'
      state.products = action.payload
    })
    builder.addCase(fetchProduct.rejected, (state) => {
      state.status = 'failed'
    })
  },
})

export const selectProducts = (state: RootState) => state.product.products
export const selectProductsStatus = (state: RootState) => state.product.status
