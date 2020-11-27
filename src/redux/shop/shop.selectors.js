import { createSelector } from 'reselect'

const selectState = (state) => state.shop

export const selectShop = createSelector(
  [selectState],
  (shop) => shop.shop_data
)

// when the section page be completed
export const selectShopSections = (sectionMatchParam) =>
  createSelector([selectShop], (shop_data) =>
    shop_data ? shop_data[sectionMatchParam] : null
  )

export const selectShopMenu = createSelector([selectShop], (shop_data) =>
  Object.keys(shop_data)
)

export const selectShopFirebase = createSelector([selectShop], (shop_data) =>
  Object.keys(shop_data).map((key) => shop_data[key])
)
