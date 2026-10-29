import React, { createContext } from 'react'

export const postDataContext = createContext();

 const PostContext = ({children}) => {

   const data =  [
  {
    "id": 1,
    "fullName": "Rohit Sharma",
    "email": "rohit.sharma@example.com",
    "age": 24,
    "role": "Frontend Developer",
    "isActive": true
  },
  {
    "id": 2,
    "fullName": "Anjali Verma",
    "email": "anjali.verma@example.com",
    "age": 22,
    "role": "UI/UX Designer",
    "isActive": true
  },
  {
    "id": 3,
    "fullName": "Aman Gupta",
    "email": "aman.gupta@example.com",
    "age": 26,
    "role": "Backend Developer",
    "isActive": false
  },
  {
    "id": 4,
    "fullName": "Sneha Patel",
    "email": "sneha.patel@example.com",
    "age": 23,
    "role": "Full Stack Developer",
    "isActive": true
  },
  {
    "id": 5,
    "fullName": "Vikram Singh",
    "email": "vikram.singh@example.com",
    "age": 28,
    "role": "DevOps Engineer",
    "isActive": false
  }
]

  return (
    <postDataContext.Provider value={data}>
        {children}
    </postDataContext.Provider>
  )
}

export default PostContext
