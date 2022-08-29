import { checkoutSlice } from '../../features/checkout/checkoutSlice'
import { productSlice } from '../../features/product/productSlice'
import { shopCartSlice } from '../../features/shopcart/shopCartSlice'

const rootReducer = {
  [checkoutSlice.name]: checkoutSlice.reducer,
  [shopCartSlice.name]: shopCartSlice.reducer,
  [productSlice.name]: productSlice.reducer,
}

export default rootReducer
