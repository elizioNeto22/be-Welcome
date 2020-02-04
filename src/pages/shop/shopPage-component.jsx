import React from 'react'
import {withRouter} from 'react-router-dom'

import ShopContainer from '../../components/shop-container/shop-container-component'
import ShopMenu from '../../components/shop-menu/shop-menu-component'
import SHOP_DATA from './shop_data'

import './shopPage-styles.scss'

class ShopPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      departament: SHOP_DATA,
      actualCollection: props
    }
  }


  renderCollection = () => {
    const title = this.state.actualCollection.match.params['title']
    return this.state.departament.map(({id, routeName, items}) => 
    routeName === title ? <ShopContainer key={id} items={items} /> : null)
  }


  componentDidUpdate(prevProps) {
    if (this.props !== prevProps){
      this.setState({actualCollection: this.props})
    }
  }
  
  
  render() {
    return (
      <div className="shopPage-container">
        {/* <div onClick={() => console.log(this.props.match)}>history</div> */}
        <ShopMenu collection={this.state.departament} renderCollection={this.renderCollection} />
        {this.renderCollection()}
      </div>
    )
  }
}




export default withRouter(ShopPage)
