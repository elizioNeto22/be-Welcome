import React from 'react'
import {withRouter} from 'react-router-dom'

import CustomTitle from '../custom-title/customTitle-component'

import './main-item-styles.scss'

const MainItem = ({imageUrl, size, title, linkUrl, history, match}) => (
  <div className="menu-item clearfix" onClick={() => history.push(`${match.url}${linkUrl}`)} >
      <div className={`menu-item-image ${size}`} style={{backgroundImage: `url(${imageUrl})`}}>
        <CustomTitle className="menu-item-info" desc="From $180" title={title}/>
      </div>
  </div>     
)

export default withRouter(MainItem)
