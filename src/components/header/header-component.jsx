import React from 'react'
import {Link} from 'react-router-dom'
import {userSignOut} from '../../firebase/firebase.utils'
import CustomButton from '../../components/custom-button/customButton-component' 

import './header-styles.scss'
import '../custom-button/custom-button-styles.scss'

const Header = ({currentUser}) => (
  <div className="header-container">

    <Link to="/" className="logo" />

    {/* Transformar esse nav em um component (posso reusar com os icones mais abaixo)*/}
    <div className="nav-bar" style={{listStyle: 'none'}}>
        <Link className="nav-option" to="/">HOME</Link>
        <Link className="nav-option" to="/cart">CART</Link>
        <Link className="nav-option" to="/checkout">CHECKOUT</Link>
    </div>

    <div className="btn-group">
      {
        currentUser 
          ? 
        <CustomButton className="sign-button sign-OUT-button" type="button" onClick={userSignOut}>SIGN OUT</CustomButton>
          :
        <Link to="/signin">
          <CustomButton className="sign-button sign-IN-button" type="button" >SIGN IN</CustomButton>
        </Link>
      }
      <Link to="/signup">
        <CustomButton className="sign-button sign-UP-button" type="button" >SIGN UP</CustomButton>
      </Link>
    </div>

    <div className="nav-icons">
      <ul>
        <li className="icon icon-cart">CART <span className='cart-count'>(0)</span></li>
        <li className="icon icon-fav">FAVOURITE</li>
        <li className="icon icon-search">SEARCH</li>
      </ul>
    </div>

  </div>
)

export default Header