import React from 'react'
import {Link} from 'react-router-dom'
import {userSignOut} from '../../firebase/firebase.utils'
import CustomButton from '../../components/custom-button/customButton-component' 
import {connect} from 'react-redux'

import './header-styles.scss'
import '../custom-button/custom-button-styles.scss'

const Header = ({currentUser}) => (
  <div className="header-container">

    {/* Responsive menu */}
    <div className="hamburger-container">
      <input class="menu-trigger hidden" id="togglenav" type="checkbox" />
      <label class="burger-wrapper" for="togglenav">
        <div class="hamburger">
          <div className="tab-content">
            <ul>
              <li><Link to="/">HOME</Link></li>
              {/* <li><Link  to="/cart">CART</Link></li> */}
              <li><Link  to="/checkout">CHECKOUT</Link></li>
              
              { 
                currentUser 
                  ? 
                  <li className="sign-button sign-OUT-button" onClick={userSignOut}>
                    SIGN OUT
                  </li>
                  :
                  <li className="sign-button sign-IN-button">
                    <Link to="/signin">SIGN IN</Link>
                  </li>
              }
                <li className="sign-button sign-UP-button">
                  <Link to="/signup">SIGN UP</Link>
                </li>

                <li className="icon icon-cart"><Link to="/cart">CART<span className='cart-count'>(0)</span></Link></li>
                <li className="icon icon-fav"><Link to="/">FAVOURITE</Link></li>
                <li className="icon icon-search"><Link to="/">SEARCH</Link></li>
            </ul>
          </div>
        </div>
      </label>
    </div>
      

    {/* Desktop / Tablet menu */}
    <Link to="/" className="logo"/>
    {/* Transformar esse nav em um component (posso reusar com os icones mais abaixo)*/}
    <div className="nav-bar" style={{listStyle: 'none'}}>
        <Link className="nav-option" to="/">HOME</Link>
        {/* <Link className="nav-option" to="/cart">CART</Link> */}
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

const mapStateToProps = (state) => ({currentUser: state.user.currentUser})

export default connect(mapStateToProps)(Header)
