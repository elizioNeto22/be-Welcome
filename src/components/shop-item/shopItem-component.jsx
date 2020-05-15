import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { addItem } from '../../redux/cart/cart.actions'
import CustomTitle from '../custom-title/customTitle-component'
import { ReactComponent as AddCartItem } from '../../assets/icons/add-cart-item.svg'

import './shop-item-styles.scss'

const ShopItem = ({ item, addItem, history, match }) => {
  const { name, price, imageUrl } = item
  return (
    <div className="shop-item">
      <div
        onClick={() => {
          match.params.section = name
          return history.push(`${match.url}/${name}`)
        }}
        className="shop-item-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="shop-item-info">
        <CustomTitle
          className="shop-item-info-text"
          desc={`$${price}`}
          title={name}
        />

        <div className="shop-item-features">
          <AddCartItem className="cart" onClick={() => addItem(item)} />
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  addItem,
}

export default withRouter(connect(null, mapDispatchToProps)(ShopItem))
