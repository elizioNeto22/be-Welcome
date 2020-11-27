import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleCart } from '../../redux/cart/cart.actions'
import { selectCartItemCount } from '../../redux/cart/cart.selectors'
import { ReactComponent as ShopIcon } from '../../assets/icons/cart-icon.svg'

const CartIcon = ({ toggleCart, cartIconCount }) => (
  <div className="icon" onClick={() => toggleCart()}>
    <ShopIcon />
    <span className="cart-count">{cartIconCount}</span>
  </div>
)

const mapDipatchToProps = {
  toggleCart,
}

const mapStateToProps = createStructuredSelector({
  cartIconCount: selectCartItemCount,
})

export default connect(mapStateToProps, mapDipatchToProps)(CartIcon)
