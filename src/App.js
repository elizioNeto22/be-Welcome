import React from 'react';
import {Route, Switch, Link} from 'react-router-dom'

import HomePage from './pages/homepage/homepage-component'
import ShopPage from './pages/shop/shopPage-component'
import ProductPage from './pages/product-page/productPage-component'
import Header from './components/header/header-component'


import './App.scss';



class App extends React.Component {

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
        <Header />
        <Switch>
          <Route exact path='/' render={() => <HomePage />}/>
          {/* <Route exact path='/' render={(props) => <ShopPage {...props} />}/> */}
          <Route exact path={`/shop/:${section}`} render={() => <ShopPage />} />
          <Route path={`/shop/:${section}/:${product}`} component={ProductPage} />
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