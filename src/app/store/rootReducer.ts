import counterReducer from '../../features/counterSlice'
import productReducer from '../../features/productSlice'
import checkoutReducer from '../../features/checkoutSlice'

const rootReducer = {
  counter: counterReducer,
  product: productReducer,
  checkout: checkoutReducer,
}

export default rootReducer
