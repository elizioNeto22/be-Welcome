import React from 'react'

import CustomButton from '../custom-button/customButton-component'

import './cart-total.styles.scss'

const CartTotal = ({ total }) => {
  return (
    <div className="total-container">
      <h3>Cart Total</h3>
      <ul className="checkout-table">
        <li>
          <span>Items total: </span>
          <span className="total-gross">${total}</span>
        </li>
        <li>
          <label htmlFor="cupom">Cupom code: </label>
          <input type="text" id="cupom" className="cupom" />
        </li>
        <li className="payment">
          <p>Payment: </p>
          <span className="cash-payment">
            Cash<span> (-15%)</span>: ${total * 0.85}
          </span>
          <span className="card-payment">Credit card${total}</span>
        </li>
      </ul>
      <CustomButton>Checkout</CustomButton>
    </div>
  )
}

export default CartTotal
