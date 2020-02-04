import React from 'react'
import './main-container-styles.scss'

import MainItem from '../02-main-item/main-item-component'
import SECTIONS_DATA from './section-data'

class MainContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      SECTIONS_DATA
    }
  }

  renderItems = () => {
    return this.state.SECTIONS_DATA.map(({id, ...otherProps}) => (
      <MainItem key={id} {...otherProps} />
    ))
  }


  render(){
    return (
      <div className="menu-item-container">
        {this.renderItems()}
      </div>
    )
  }
}

export default MainContainer