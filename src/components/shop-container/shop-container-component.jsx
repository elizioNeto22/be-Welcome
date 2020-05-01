import React from 'react'

import ShopItem from '../shop-item/shopItem-component'

import './shop-container-styles.scss'

const ShopContainer = ({items}) => {
  return (
    <div className="shop-container">
      {items.map(({id, ...otherProps}) => <ShopItem key={id} {...otherProps}/>)}
    </div>
  )
}

export default ShopContainer