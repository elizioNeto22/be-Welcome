import React from 'react'
import {withRouter} from 'react-router-dom'

import './main-item-styles.scss'

const MainItem = ({imageUrl, size, title, linkUrl, history, match}) => (
  <div className="menu-item clearfix" onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div className={`menu-item-image ${size}`} style={{backgroundImage: `url(${imageUrl})`}}>
        <div className="menu-item-info">
          <p>From $180</p>
          <h2>{title}</h2>
        </div>
      </div>
  </div>     
)

export default withRouter(MainItem)

