import React from 'react'
import {withRouter} from 'react-router-dom'

import CustomTitle from '../custom-title/customTitle-component'

import './shop-item-styles.scss'

const ShopItem = ({name, price, imageUrl, history, match}) => (
  <div className="shop-item" onClick={() => {
    match.params.section = name 
    return history.push(`${match.url}/${name}`)}}>
    <div className="shop-item-img" style={{backgroundImage: `url(${imageUrl})`}} />

    <div className="shop-item-info">
      <CustomTitle className="shop-item-info-text" desc={`$${price}`} title={name} />

      <div className="shop-item-features">
        <div className="rating">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
        
        <div className="cart" />
      </div>
    </div>

  </div>
  
)

export default withRouter(ShopItem)