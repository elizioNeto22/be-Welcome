import shopTypes from './shop.types'

export const updateShop = (updatedShopData) => ({
  type: shopTypes.UPDADE_SHOP,
  payload: updatedShopData,
})
