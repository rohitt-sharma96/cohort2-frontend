import React from 'react'

const Button = (props) => {
  return (
    <div className='m-2 text-white text-xl font-semibold bg-emerald-700 rounded px-3 py-2 border-white w-fit'>
      {props.text}
    </div>
  )
}

export default Button
