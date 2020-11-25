import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectHomepage } from '../../redux/homepage/homepage.selectors'
import MainItem from '../02-main-item/main-item-component'

import './main-container-styles.scss'

const MainContainer = ({ homepage_data }) => {
  const renderItems = () => {
    return homepage_data.map(({ id, ...otherProps }) => (
      <MainItem key={id} {...otherProps} />
    ))
  }
  return <div className="menu-item-container">{renderItems()}</div>
}

const mapStateToProps = createStructuredSelector({
  homepage_data: selectHomepage,
})

export default connect(mapStateToProps)(MainContainer)
