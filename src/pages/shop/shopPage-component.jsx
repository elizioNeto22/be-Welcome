import React from 'react'
import { withRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectShop } from '../../redux/shop/shop.selectors'
import ShopContainer from '../../components/shop-container/shop-container-component'
import ShopMenu from '../../components/shop-menu/shop-menu-component'

import './shopPage-styles.scss'

const ShopPage = ({ shop_data, match }) => {
  const renderCollection = () => {
    return shop_data.map(({ id, routeName, ...otherProps }) => {
      return (
        <Route
          key={id}
          exact
          path={`/shop/${routeName}`}
          render={() => <ShopContainer key={id} {...otherProps} />}
        />
      )
    })
  }
  return (
    <div className="shopPage-container">
      <ShopMenu collection={shop_data} />
      {renderCollection()}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  shop_data: selectShop,
})

export default withRouter(connect(mapStateToProps)(ShopPage))
