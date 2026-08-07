import React from 'react'
import './Button.css'
function Button(props) {
  return (
    <div>
      <button className='btn' onClick={props.onClick}>{props.value}</button>
    </div>
  )
}

export default Button
