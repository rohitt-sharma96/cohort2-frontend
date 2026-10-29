import React, { useState } from 'react'

const Navbar = (props) => {
  const [name, setName] = useState('')


  return (
    <div className='nav'>
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(name)
        props.changeTheme(name)
        setName('')
      }}>
        <input value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text" placeholder='Enter theme' />
        <button>Submit</button>
      </form>

    </div>
  )
}

export default Navbar