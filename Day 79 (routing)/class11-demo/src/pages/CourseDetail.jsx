import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    let params = useParams();

  return (
    <div>
      <h1 className='text-center text-5xl underline'> {params.id} Course Detail...</h1>
    </div>
  )
}

export default CourseDetail