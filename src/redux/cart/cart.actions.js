import { cartTypes } from './cart.types'

export const toggleCart = () => ({
  type: cartTypes.HIDDEN_CART,
})

export const addItem = (item) => ({
  type: cartTypes.ADD_ITEM,
  payload: item,
})
