import React from 'react'

const CustomInput = ({label, handleChange, ...otherProps}) => (
  <div>
    <input onChange={handleChange} {...otherProps}/>
    {// aqui é para se o dev quiser passar um label, passa se ñ, td bem
      label ? 
      (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`} >
        {label}
      </label>)
      : null
    }
  </div>
)

export default CustomInput