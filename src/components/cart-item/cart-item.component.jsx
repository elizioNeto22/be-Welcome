import React from 'react'
import { connect } from 'react-redux'
import { addItem, removeUnity } from '../../redux/cart/cart.actions'

import TrashIcon from '../trash-icon/trash-icon.component'

import './cart-item.styles.scss'

const CartItem = ({ item, dispatch }) => {
  const { name, imageUrl, quantity, price } = item
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="" />
      <div className="item-info">
        <p>{name}</p>
        <div>
          <span
            className="quantity-icon"
            onClick={() => dispatch(removeUnity(item))}
          >
            &#8826;
          </span>
          <span>&#10005; </span>
          <span className="quantity">{quantity}</span>
          <span
            className="quantity-icon"
            onClick={() => dispatch(addItem(item))}
          >
            &#8827;
          </span>
        </div>
        <p>${price}</p>
        <TrashIcon item={item} />
      </div>
    </div>
  )
}

export default connect(null)(CartItem)
