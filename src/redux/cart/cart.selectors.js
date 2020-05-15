import { createSelector } from 'reselect'

const selectCart = (state) => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const selectHiddenCart = createSelector(
  [selectCart],
  (cart) => cart.hidden
)

export const selectExpand = createSelector([selectCart], (cart) => cart.expand)

export const selectExpandCart = createSelector([selectExpand], (expand) =>
  expand ? 'expand' : ''
)

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0)
)

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
)
