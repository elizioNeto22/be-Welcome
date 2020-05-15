import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import {
  selectCartItems,
  selectCartTotal,
  selectExpandCart,
} from '../../redux/cart/cart.selectors'
import { toggleCart, toggleExpand } from '../../redux/cart/cart.actions'

import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/customButton-component'
import CartExpandHeader from '../cart-expand-header/cart-expand-header.component'

import './cart-menu.styles.scss'
import './cart-menu-expand.styles.scss'

const CartMenu = ({
  cartItems,
  cartTotal,
  cartExpand,
  toggleCart,
  toggleExpand,
  history,
}) => {
  const renderCartItems = () =>
    cartItems.map((item) => <CartItem key={item.id} item={item} />)

  return (
    <div className={`cart-menu ${cartExpand}`}>
      <div className="close-icon" onClick={() => toggleCart()}>
        &#10005;
      </div>

      {cartExpand ? <CartExpandHeader /> : null}

      <div className="cart-item-container">
        {cartItems.length ? (
          renderCartItems()
        ) : (
          <span className="empty-cart-msg">You have no items</span>
        )}
      </div>

      <div className="cart-total">
        <span>Total: </span>
        <span>${cartTotal}</span>
      </div>
      <div className="buttons-container">
        <CustomButton
          onClick={(e) => {
            toggleExpand()
          }}
        >
          {cartExpand ? 'Back' : 'View cart'}
        </CustomButton>

        <CustomButton
          onClick={(e) => {
            history.push('/checkout')
            toggleCart()
          }}
        >
          Checkout
        </CustomButton>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
  cartExpand: selectExpandCart,
})

const mapDispatchToProps = {
  toggleCart,
  toggleExpand,
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartMenu)
)
