import React from 'react'

const Card = (props) => {
  console.log(props)

  return (

   
    <div className='flex  flex-wrap' >
      <div className="card h-150 w-100 p-3  m-5 relative bg-gray-100 rounded-2xl shadow-[0px 0px 20px rgb(0,0,0,.390)]">
        <div className="img h-[30%] w-full rounded-2xl bg-white  ">
          <img className='h-full w-full object-cover object-center rounded-2xl' src="https://images.unsplash.com/photo-1509803874385-db7c23652552?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

          <img className=' h-30 w-30 object-cover object-top rounded-[50%] absolute top-30 left-[35%]' src={props.users.superheroImage} alt="user-img" />
        </div>
        <div className="name my-18 mx-10 text-[#787878]  text-center">
          <h1 className='text-black text-3xl font-bold'>{props.users.fullName}</h1>
          <p className='text-[19px] mt-4 font-semibold'>{props.users.description}</p>
        </div>
        <div className="count-card bg-white-600 p-10 shadow-xs bg-gray-200 rounded-4xl border-2 border-gray-100 text-black">
          <div className="count flex gap-10 items-center justify-evenly">
            <div className="like flex flex-col justify-center items-center">
              
              <h3 className='font-bold  text-xl'>{props.users.likeCount}</h3>
              <p className='font-semibold text-gray-300'>Like</p>
            </div>
            <div className="post flex flex-col justify-center items-center">
              <h3 className='font-bold  text-xl'>{props.users.postCount}</h3>
              <p className='font-semibold text-gray-300'>Post</p>
            </div>
            <div className="view flex flex-col justify-center items-center">
              <h3 className='font-bold  text-xl'>{props.users.viewCount}</h3>
              <p className='font-semibold text-gray-300'>views</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
