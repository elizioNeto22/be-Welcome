import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import { toggleCart } from '../../redux/cart/cart.actions'
import { selectCartTotal } from '../../redux/cart/cart.selectors'

import StripeCheckoutButton from '../stripe-button/stripe-button.component'

import './cart-total.styles.scss'

const CartTotal = ({ total, history, toggleCart, cartTotal }) => {
  const promise = loadStripe(
    'pk_test_51HLHsoLtP8EO8m8CxGbQf1Y4ItzzEF9EbZubN3KwZ4u4WshduS03qkJdeEmAnmNKbWOKcMM2lak7buijXlWtuinY00XJDbZSpD'
  )

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
      {/* <Elements stripe={promise}>
        <StripeCheckoutButton price={cartTotal} />
      </Elements> */}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartTotal: selectCartTotal,
})

const mapDispatchToProps = {
  toggleCart,
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartTotal)
)
