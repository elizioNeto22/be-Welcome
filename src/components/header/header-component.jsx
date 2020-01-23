import React from 'react'
import {Link} from 'react-router-dom'

import CustomButton from '../custom-button/customButton-component' 

import './header-styles.scss'

const Header = () => (
  <div className="header-container">

    <Link to="/" className="logo" />

    <div className="nav-bar">
      <Link className="nav-option" to="/">HOME</Link>
      <Link className="nav-option" to="/cart">CART</Link>
      <Link className="nav-option" to="/checkout">CHECKOUT</Link>
    </div>

    <div className="btn-group">
      <Link to="/signin">
        <CustomButton className="sign-in-discount" type="button" >Sign In</CustomButton>
      </Link>
      <CustomButton className="header-button-new" type="button" >New This Week</CustomButton>
    </div>

  </div>
)

export default Header