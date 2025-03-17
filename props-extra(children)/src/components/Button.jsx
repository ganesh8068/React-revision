import React from 'react'

const Button = (props) => {
  return (
    <div>
      <h1>{props.children}</h1>
      <button onClick={props.handleClick}>
        click me
      </button>
    </div>
  )
}

export default Button
