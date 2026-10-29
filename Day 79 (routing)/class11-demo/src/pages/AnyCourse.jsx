import React from 'react'
import { useParams } from 'react-router-dom'

const AnyCourse = () => {

  let param = useParams()
  console.log(param.id)

  return (
    <div>
      <h1 className='text-center text-5xl underline'>{param.id} Some Course Page</h1>
    </div>
  )
}

export default AnyCourse