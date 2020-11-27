import HOMEPAGE_DATA from './homepage-data'

const INITIAL_STATE = {
  homepage_data: HOMEPAGE_DATA,
}

const homepageReducer = (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    default:
      return state
  }
}

export default homepageReducer
