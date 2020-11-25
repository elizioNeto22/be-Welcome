import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CustomInput from '../customInput/custom-input-component'
import { selectHomepage } from '../../redux/homepage/homepage.selectors'

import './shop-menu-styles.scss'

const ShopMenu = ({ sectionsList, history }) => {
  let colorCircles = []
  for (let i = 0; i < 8; i++) {
    colorCircles.push(<li key={i} className="circle-colors-menu" />)
  }
  return (
    <div className="shop-menu">
      <div className="types-menu tab">
        <input type="checkbox" className="tab-check" id="tab-check-types" />
        <label className="tab-label types-title" htmlFor="tab-check-types">
          Types
        </label>
        <div className="tab-content">
          <ul>
            {sectionsList.map(({ id, title, routeName }) => (
              <li
                key={id}
                onClick={() => {
                  history.replace(`${routeName}`)
                }}
              >
                <Link to={title}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="brands-menu tab">
        <input type="checkbox" className="tab-check" id="tab-check-brands" />
        <label className="tab-label menu-title" htmlFor="tab-check-brands">
          Brands
        </label>
        <div className="tab-content">
          <CustomInput
            className="input-brands-menu"
            label="Tok & Stok"
            name="tokStok"
            type="checkbox"
            value="tokStok"
          />
          <CustomInput
            className="input-brands-menu"
            label="Mobly"
            name="mobly"
            type="checkbox"
            value="mobly"
          />
          <CustomInput
            className="input-brands-menu"
            label="Ikea"
            name="ikea"
            type="checkbox"
            value="ikea"
          />
          <CustomInput
            className="input-brands-menu"
            label="Art Decor"
            name="artDecor"
            type="checkbox"
            value="artDecor"
          />
          <CustomInput
            className="input-brands-menu"
            label="Collector 55"
            name="collector55"
            type="checkbox"
            value="collector55"
          />
        </div>
      </div>

      <div className="colors-menu tab">
        <input type="checkbox" className="tab-check" id="tab-check-colors" />
        <label className="tab-label menu-title" htmlFor="tab-check-colors">
          Colors
        </label>
        <div className="tab-content">
          <ul>{colorCircles.map((item) => item)}</ul>
        </div>
      </div>

      <div className="slider-menu">
        <h4 className="menu-title">Price</h4>
        <CustomInput className="slider" type="range" name="slider" />
        <span>$1 - $599</span>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sectionsList: selectHomepage,
})

export default withRouter(connect(mapStateToProps)(ShopMenu))
