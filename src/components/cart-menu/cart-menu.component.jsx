import React from 'react'

import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/customButton-component'

import './cart-menu.styles.scss'

const CartMenu = () => {
  return (
    <div className="cart-menu">
      <div className="close-menu">&#10005;</div>

      <div className="cart-item-container">
        <CartItem />
      </div>
      <div className="cart-total">
        <span>Total: </span>
        <span>$18</span>
      </div>

      <CustomButton />
    </div>
  )
}

export default CartMenu
