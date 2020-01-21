import React from 'react'

const CustomButton = ({className, type, title}) => (
  <button className={className} type={type}>{title}</button>
)

export default CustomButton