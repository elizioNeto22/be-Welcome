import React from 'react'
import {Link} from 'react-router-dom'

import CustomButton from '../button/button-component' 

import './header-styles.scss'

const Header = () => (
  <div className="header-container">

    <Link to="/" className="logo" />

    <div className="nav-bar">
      <Link className="nav-option" to="/">HOME</Link>
      <Link className="nav-option" to="/shop">SHOP</Link>
      <Link className="nav-option" to="/product">PRODUCT</Link>
      <Link className="nav-option" to="/cart">CART</Link>
      <Link className="nav-option" to="/checkout">CHECKOUT</Link>
    </div>

    <div className="btn-group">
      <CustomButton className="header-button-discount" type="button" title="%Discount%"/>
      <CustomButton className="header-button-new" type="button" title="New This Week"/>
    </div>

  </div>
)

export default Header