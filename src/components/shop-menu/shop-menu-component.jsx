import React from 'react'
import {withRouter} from 'react-router-dom'


const ShopMenu = ({collection, renderCollection, history}) => {
  
  return (
    <div className="shop-menu">
      <ul>
        {collection.map(({id, routeName, title}) => 

            <li key={id} onClick={() => {
              history.replace(`${routeName}`)
              return renderCollection
            }} 
            >{title}</li>
          )}
      </ul>
  </div>
  )
  
}

export default withRouter(ShopMenu)
