import React from 'react'

import TrashIcon from '../trash-icon/trash-icon.component'

import './cart-item.styles.scss'

const CartItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="" />
      <div className="item-info">
        <p>{name}</p>
        <p>
          <span>&#10005; </span>
          {quantity}
        </p>
        <p>${price}</p>
        <TrashIcon item={item} />
      </div>
    </div>
  )
}

export default CartItem
