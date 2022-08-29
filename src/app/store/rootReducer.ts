import checkoutSlice from "../../features/checkout/checkoutSlice"
import shopCartSlice from "../../features/shopcart/shopCartSlice"

const rootReducer = {
  checkout: checkoutSlice,
  shopcart: shopCartSlice,
}

export default rootReducer
