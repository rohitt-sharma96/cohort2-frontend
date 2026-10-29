import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [user, setUser] = useState('')
  const [role, setRole] = useState('')
  const [img, setImg] = useState('')
  const [desc, setDesc] = useState('')

  const [allUsers, setAllUsers] = useState([]);

  const deleteHandler = (idx)=>{
   const copyUsers = [...allUsers]

    copyUsers.splice(idx,1)
    setAllUsers(copyUsers);
  }

  const submitHandler = (e) => {
    e.preventDefault();

  }
  return (
    <div className='h-screen w-full bg-[#333]'>

      <form onSubmit={(e) => {
        submitHandler(e);
        let oldUsers = [...allUsers]
        oldUsers.push({ user, role, img, desc })
        setAllUsers(oldUsers)


        setUser('')
        setRole('')
        setImg('')
        setDesc('')
      }}>

        <input className='border-2 m-2 p-2' value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }} type="text" placeholder='Enter name' />


        <input className='border-2 m-2 p-2' value={role} type="text"
          onChange={(e) => {
            setRole(e.target.value)

          }} placeholder='Enter role' />

        <input className='border-2 m-2 p-2' value={img} type="text" onChange={(e) => {
          setImg(e.target.value)
        }} placeholder='Enter image URL' />

        <input className='border-2 m-2 p-2' value={desc} type="text" onChange={(e) => {
          setDesc(e.target.value)
        }} placeholder='Enter your Description' />

        <button>Submit</button>
      </form>

      {allUsers.map((elem, idx) => {
        return <div key={idx} className="card my-5 pt-5  w-[300px] bg-red-300">
                <img  className='m-auto rounded-full  h-[100px] w-[100px] object-cover object-top' src={elem.img} alt="" />

                <h1 className='text-center text-2xl font-bold'>{elem.user}</h1>
                <h2 className='text-center text-1xl font-bold pt-4'>{elem.role}</h2>
                <h4 className='text-center text-sm font-semibold tracking-tight  py-6'>{elem.desc}</h4>
                <button onClick={(e)=>{
                  console.log(e)
                  deleteHandler(idx);
                }} id={idx} className='bg-red-600 rounded text-center mx-28 my-10 p-2'>Remove</button>
            </div>
      })}
    </div>
  )
}

export default App