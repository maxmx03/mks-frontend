import { checkoutSlice } from '../../features/checkout/checkoutslice'
import { productSlice } from '../../features/product/productslice'
import { shopCartSlice } from '../../features/shopcart/shopcartslice'

const rootReducer = {
  [checkoutSlice.name]: checkoutSlice.reducer,
  [shopCartSlice.name]: shopCartSlice.reducer,
  [productSlice.name]: productSlice.reducer,
}

export default rootReducer
