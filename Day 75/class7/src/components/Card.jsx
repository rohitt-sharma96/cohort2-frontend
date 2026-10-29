import React from 'react'

const  Card = () => {
  return (
    <div>
        <div className="cards flex flex-wrap  gap-10 items-center">
            <div className="card my-5 pt-5  w-[300px] bg-red-300">
                <img  className='m-auto rounded-full  h-[100px] w-[100px] object-cover object-top' src="https://plus.unsplash.com/premium_photo-1682095757120-c9abb908ed60?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                <h1 className='text-center text-2xl font-bold'>Sarthak Desouja</h1>
                <h2 className='text-center text-1xl font-bold pt-4'>Software Developer</h2>
                <h4 className='text-center text-sm font-semibold tracking-tight  py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, tenetur.</h4>
            </div>
            </div>
    </div>
  )
}

export default Card;