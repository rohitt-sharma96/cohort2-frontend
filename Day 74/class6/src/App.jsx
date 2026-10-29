import React, { useState } from 'react'

const App = () => {

  let submitHandler = (e) => {
    e.preventDefault();
    console.log(user)
    setUser('')
  }

  const [user, setUser] = useState('')

  const [allUsers, setAllUsers] = useState(['aman'])

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e);
        const oldUsers = [...allUsers]
        oldUsers.push(user)
        
        console.log(oldUsers)

        setAllUsers(oldUsers);
        setUser('')
      }} >
        <input 
          type="text" placeholder='Enter name'
          value={user}
          onChange={(dets)=>{
            setUser(dets.target.value)
          }}
          />
        <button >Submit</button>
      </form>
    </div>
  )
}

export default App
