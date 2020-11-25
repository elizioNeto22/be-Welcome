import React from 'react'

import ShopItem from '../shop-item/shopItem-component'

import './shop-container-styles.scss'

const ShopContainer = ({ items }) => {
  return (
    <div className="shop-container">
      {items.map((item) => (
        <ShopItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ShopContainer
