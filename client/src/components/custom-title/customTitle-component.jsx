import React from 'react'

const CustomTitle = ({className, title, desc}) => (
  <div className={className}>
    <div className="info-line"></div>
    <p>{desc}</p>
    <h2>{title}</h2>
  </div>
)


export default CustomTitle