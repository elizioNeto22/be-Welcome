import React from 'react'

const CustomButton = ({children, handleClick, ...otherProps}) => (
  <button onClick={() => handleClick} {...otherProps}>{children}</button>
)

export default CustomButton