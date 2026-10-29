import React, { useState } from 'react'

const App = () => {
  const submitHandler = (e)=>{
      e.preventDefault();
    }

    const [user, setUser] = useState('');

    const [allUsers, setAllUsers] = useState(['sarthak']);

  return (

    <div>
      <form onSubmit={(e)=>{
        submitHandler(e);

        
        const newAllUsers = [...allUsers];

        newAllUsers.push(user)

        console.log(newAllUsers)

        setAllUsers(newAllUsers);

        setUser('')
      }}>

      <input value={user} onChange={(e)=>{

        setUser(e.target.value);
        
        
      }} type="text" placeholder='Enter name' />
      <button>Submit</button>
      </form>

      {allUsers.map((elem)=>{
        return <h1>{elem}</h1>
      })}
    </div>
  )
}

export default App