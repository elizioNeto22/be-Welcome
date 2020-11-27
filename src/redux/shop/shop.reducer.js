import shopTypes from './shop.types'

const INITIAL_STATE = {
  shop_data: null,
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopTypes.UPDADE_SHOP:
      return {
        ...state,
        shop_data: action.payload,
      }
    default:
      return state
  }
}

export default shopReducer
