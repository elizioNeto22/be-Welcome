// import React from 'react'
// import { withRouter } from 'react-router-dom'

// import CustomTitle from '../custom-title/customTitle-component'

// import './main-item-styles.scss'

// const MainItem = ({
//   routeName,
//   imageUrl,
//   title,
//   linkUrl,
//   clascss,
//   size,
//   history,
//   match,
// }) => (
//   <div
//     className={`menu-item ${clascss}`}
//     onClick={() => {
//       match.params.section = routeName
//       return history.push(`${linkUrl}`)
//     }}
//   >
//     <div
//       className={`menu-item-image ${size}`}
//       style={{ backgroundImage: `url(${imageUrl}` }}
//     >
//       <CustomTitle className="menu-item-info" desc="From $180" title={title} />
//     </div>
//   </div>
// )

// export default withRouter(MainItem)

import React from 'react'
import { withRouter, Link } from 'react-router-dom'

import CustomTitle from '../custom-title/customTitle-component'

import './main-item-styles.scss'

const MainItem = ({
  routeName,
  imageUrl,
  title,
  linkUrl,
  clascss,
  size,
  history,
  match,
}) => (
  <div className={`menu-item ${clascss}`}>
    <Link to={`/shop/${routeName}`}>
      <div
        className={`menu-item-image ${size}`}
        style={{ backgroundImage: `url(${imageUrl}` }}
      >
        <CustomTitle
          className="menu-item-info"
          desc="From $180"
          title={title}
        />
      </div>
    </Link>
  </div>
)

export default withRouter(MainItem)
