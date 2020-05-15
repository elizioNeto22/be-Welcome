import { cartTypes } from './cart.types'
import { addItem, deleteItem } from './cart.utils'

const INITIAL_STATE = {
  hidden: false, // true
  expand: true, //false
  cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.HIDDEN_CART:
      return {
        ...state,
        hidden: !state.hidden,
      }
    case cartTypes.EXPAND_CART:
      return {
        ...state,
        expand: !state.expand,
      }
    case cartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItem(action.payload, state.cartItems),
      }
    case cartTypes.DELETE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: deleteItem(action.payload, state.cartItems),
      }
    default:
      return state
  }
}

export default cartReducer
