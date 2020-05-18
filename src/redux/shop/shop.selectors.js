import { createSelector } from 'reselect'

const selectState = (state) => state.shop

export const selectShop = createSelector(
  [selectState],
  (shop) => shop.shop_data
)
