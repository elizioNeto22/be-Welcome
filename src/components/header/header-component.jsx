import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { userSignOut } from '../../firebase/firebase.utils'
import { selectHiddenCart } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import CustomButton from '../../components/custom-button/customButton-component'
import CartIcon from '../cart-icon/cart-icon.component'
import CartMenu from '../cart-menu/cart-menu.component'

import './header-styles.scss'
import './header-styles-mobile.scss'
import '../custom-button/custom-button-styles.scss'

const Header = ({ currentUser, hiddenCart }) => (
  <div className="header-container">
    {/* Responsive menu */}
    <div className="hamburger-container">
      <input className="menu-trigger hidden" id="togglenav" type="checkbox" />
      <label className="burger-wrapper" htmlFor="togglenav">
        <div className="hamburger">
          <div className="tab-content">
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/checkout">CHECKOUT</Link>
              </li>

              {currentUser ? (
                <li
                  className="sign-button sign-OUT-button"
                  onClick={userSignOut}
                >
                  SIGN OUT
                </li>
              ) : (
                <li className="sign-button sign-IN-button">
                  <Link to="/signin">SIGN IN</Link>
                </li>
              )}
              <li className="sign-button sign-UP-button">
                <Link to="/signup">SIGN UP</Link>
              </li>

              <li className="icon icon-cart">
                <Link to="/cart">
                  CART<span className="cart-count">(0)</span>
                </Link>
              </li>
              <li className="icon icon-fav">
                <Link to="/">FAVOURITE</Link>
              </li>
              <li className="icon icon-search">
                <Link to="/">SEARCH</Link>
              </li>
            </ul>
          </div>
        </div>
      </label>
    </div>

    {/* Desktop / Tablet menu */}
    <Link to="/" className="logo" />
    {/* Transformar esse nav em um component (posso reusar com os icones mais abaixo)*/}
    <div className="nav-bar" style={{ listStyle: 'none' }}>
      <Link className="nav-option" to="/">
        HOME
      </Link>
      {/* <Link className="nav-option" to="/cart">CART</Link> */}
      <Link className="nav-option" to="/checkout">
        CHECKOUT
      </Link>
    </div>

    <div className="btn-group">
      {currentUser ? (
        <CustomButton
          className="sign-button sign-OUT-button"
          type="button"
          onClick={userSignOut}
        >
          SIGN OUT
        </CustomButton>
      ) : (
        <Link to="/signin">
          <CustomButton className="sign-button sign-IN-button" type="button">
            SIGN IN
          </CustomButton>
        </Link>
      )}
      <Link to="/signup">
        <CustomButton className="sign-button sign-UP-button" type="button">
          SIGN UP
        </CustomButton>
      </Link>
    </div>

    <div className="nav-icons">
      <CartIcon />
      <div className="icon icon-fav">FAVOURITE</div>
      <div className="icon icon-search">SEARCH</div>
    </div>
    {hiddenCart ? null : <CartMenu />}
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hiddenCart: selectHiddenCart,
})

export default connect(mapStateToProps)(Header)
