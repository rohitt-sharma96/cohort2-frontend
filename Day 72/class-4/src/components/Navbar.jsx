import React from 'react'

const Navbar = (props) => {
    // console.log(props.color)
  return (
    <div>
      <div style={{backgroundColor : props.color}} className="nav flex items-center mb-2 justify-between px-8 py-3 text-2xl">
        <h1>{props.title}</h1>
        <div className=" flex gap-10">
           {props.links.map((elem,idx)=>{
            return <h4 key={idx}>{elem}</h4>
           })}
        </div>
      </div>
    </div>
  )
}

export default Navbar
