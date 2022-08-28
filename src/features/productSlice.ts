import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from '@reduxjs/toolkit'
import useSWR from 'swr'
import type { RootState } from '../app/store'

interface Product {
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
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: SerializedError | null
}

const initialState: ProductState = {
  products: [],
  loading: 'idle',
  error: null,
}

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  (url, { rejectWithValue }) => {
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data, error } = useSWR(
      'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=ASC',
      fetcher
    )

    if (error) {
      return rejectWithValue(error)
    }

    return data
  }
)

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.products.push(action.payload)
        }
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.error = action.error
        }
      })
  },
})

export const selectProduct = (state: RootState) => state.counter.value

export default productSlice.reducer
