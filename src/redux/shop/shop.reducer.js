import SHOP_DATA from './shop_data'

const INITIAL_STATE = {
  shop_data: SHOP_DATA,
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    default:
      return state
  }
}

export default shopReducer
