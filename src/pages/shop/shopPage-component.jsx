import React from 'react'

import SHOP_DATA from './shop_data'

class ShopPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      departament: SHOP_DATA
    }
  }

  render() {
    return (
      <h1>shop page</h1>
    )
  }
}


export default ShopPage