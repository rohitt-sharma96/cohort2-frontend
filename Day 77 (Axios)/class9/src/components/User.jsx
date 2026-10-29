import React from 'react'

const User = (props) => {
    let clr1 = Math.floor(Math.random()*256)
    let clr2 = Math.floor(Math.random()*256)
    let clr3 = Math.floor(Math.random()*256)

  return (
    <div style={{backgroundColor :`rgb(${clr1},${clr2},${clr3})`}} className='card-user'>
        <h1>{props.elem.username}</h1>
        <h2>{props.elem.website}</h2>
    </div>
  )
}

export default User