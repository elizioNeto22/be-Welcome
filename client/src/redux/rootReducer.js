import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/userReducer'
import cartReducer from './cart/cart.reducer'
import homepageReducer from './homepage/homepage.reducer'
import shopReducer from './shop/shop.reducer'

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
  homepage: homepageReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

export default persistReducer(persistConfig, rootReducer)
