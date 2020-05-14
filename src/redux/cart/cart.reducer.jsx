import { cartTypes } from './cart.types'

const INITIAL_STATE = {
  hidden: true,
  cartItems: [
    {
      id: 1,
      name: 'Chair 01',
      price: 25,
      imageUrl: '/imgs/sections/chairs/chair-1.jpg',
      quantity: 1,
    },
  ],
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.HIDDEN_CART:
      return {
        ...state,
        hidden: !state.hidden,
      }
    case cartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      }
    default:
      return state
  }
}

export default cartReducer
