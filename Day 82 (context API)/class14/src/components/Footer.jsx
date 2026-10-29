import { useContext } from "react"
import { postDataContext } from "../context/PostContext";


const Footer = () => {    
  let data = useContext(postDataContext);
  
  console.log(data)
  return (
    <div className='h-10 w-full bg-blue-700 absolute bottom-0'>
      <h1>This is Footer </h1>
    </div>
  )
}

export default Footer
