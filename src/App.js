import React from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import { auth, addUserToDatabase } from './firebase/firebase.utils'
import { connect } from 'react-redux'

import { setCurrentUser } from './redux/user/userActions'
import Header from './components/header/header-component'
import HomePage from './pages/homepage/homepage-component'
import ShopPage from './pages/shop/shopPage-component'
import CheckoutPage from './pages/checkout-page/checkout-page.component'
import ProductPage from './pages/product-page/productPage-component'
import SignInForm from './pages/sign-in/sign-in-page'
import SignUpForm from './pages/sign-up/sign-up-page'

import './App.scss'

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await addUserToDatabase(userAuth)

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  NoMatch = () => (
    <div>
      <h1>Página não Encontrada</h1>
      <Link to="/">Home</Link>
    </div>
  )

  render() {
    const section = 'title'
    const product = 'product'
    const currentUser = this.props.currentUser
    return (
      <div className="master-container">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/checkout" render={() => <CheckoutPage />} />
          <Route exact path={`/shop/:${section}`} render={() => <ShopPage />} />
          <Route
            path={`/shop/:${section}/:${product}`}
            render={() => <ProductPage />}
          />
          <Route
            exact
            path={`/signin`}
            render={() => (currentUser ? <Redirect to="/" /> : <SignInForm />)}
          />
          <Route exact path={`/signup`} render={() => <SignUpForm />} />
          <Route component={this.NoMatch} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({ currentUser: user.currentUser })

const mapDispatchToProps = {
  setCurrentUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
