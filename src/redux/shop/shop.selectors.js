import { createSelector } from 'reselect'

const selectState = (state) => state.shop

export const selectShop = createSelector(
  [selectState],
  (shop) => shop.shop_data
)

export const selectShopItems = createSelector(
  [selectShop],
  (shop_data) => shop_data.map
)
