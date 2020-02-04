import React from 'react';
import {Route, Switch, Link} from 'react-router-dom'
import {auth, addUserToDatabase} from './firebase/firebase.utils'


import Header from './components/header/header-component'
import HomePage from './pages/homepage/homepage-component'
import ShopPage from './pages/shop/shopPage-component'
import ProductPage from './pages/product-page/productPage-component'
import SignInForm from './pages/sign-in/sign-in-component'
import SignUpForm from './pages/sign-up/sign-up-component'

import './App.scss';



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await addUserToDatabase(userAuth)
        
        userRef.onSnapshot(snapShot => {
          this.setState({currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }})
          console.log(this.state)
        })
      }
      else {
        this.setState({currentUser: userAuth})
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  NoMatch = () =>(
    <div>
      <h1>Página não Encontrada</h1>
      <Link to='/'>Home</Link>
    </div>)


  render() {
    const section = 'title'
    const product = 'product'
    return (
      <div className="master-container">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' render={() => <HomePage />}/>
          <Route exact path={`/shop/:${section}`} render={() => <ShopPage />} />
          <Route path={`/shop/:${section}/:${product}`} render={() => <ProductPage />} />
          <Route exact path={`/signin`} render={() => <SignInForm />} />
          <Route exact path={`/signup`} render={() => <SignUpForm />} />
          <Route component={this.NoMatch} />
        </Switch>
  
      </div>
    )
  }
}

// na opção abaixo teria que ir passando os Route props de component em component.
// Então por isso o MainItem usa withRouter que recebe os props do Route

// <Route exact path='/' render={(props) => <HomePage {...props} />} />
// <Route exact path='/' component={HomePage} />

export default App