import React from 'react'
import {Link} from 'react-router-dom'
import {userSignOut} from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/customButton-component' 

import './header-styles.scss'

const Header = ({currentUser}) => (
  <div className="header-container">

    <Link to="/" className="logo" />

    <div className="nav-bar">
      <Link className="nav-option" to="/">HOME</Link>
      <Link className="nav-option" to="/cart">CART</Link>
      <Link className="nav-option" to="/checkout">CHECKOUT</Link>
    </div>

    <div className="btn-group">
      {
        currentUser 
          ? 
        <CustomButton className="sign-button" type="button" onClick={userSignOut}>SIGN OUT</CustomButton>
          :
        <Link className="sign-button" to="/signin">
          <CustomButton className="sign-button" type="button" >SIGN IN</CustomButton>
        </Link>
      }
      <Link to="/signin">
        <CustomButton className="sign-button" type="button" >SIGN UP</CustomButton>
      </Link>
    </div>

  </div>
)

export default Header