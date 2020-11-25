import { cartTypes } from './cart.types'

export const toggleCart = () => ({
  type: cartTypes.HIDDEN_CART,
})

export const addItem = (item) => ({
  type: cartTypes.ADD_ITEM,
  payload: item,
})

export const deleteItem = (item) => ({
  type: cartTypes.DELETE_ITEM_FROM_CART,
  payload: item,
})

export const removeUnity = (item) => ({
  type: cartTypes.REMOVE_UNITY,
  payload: item,
})

export const toggleExpand = () => ({
  type: cartTypes.EXPAND_CART,
})
