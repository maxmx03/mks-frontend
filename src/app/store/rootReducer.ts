import counterReducer from '../../features/counterSlice'
import productReducer from '../../features/productSlice'

const rootReducer = {
  counter: counterReducer,
  product: productReducer,
}

export default rootReducer
