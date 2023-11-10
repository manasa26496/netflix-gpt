import React from 'react'
import { Link } from 'react-router-dom'

const VedioTitle = ({title, overview, movieId, id,movies}) => {
  
  return (
    <div className=' w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className=' hidden md:inline-block w-1/4 py-6 text-lg'>{overview}</p>
        <div className="my-4 md:m-0">
          <Link to ={"/watch"}>
            <button className=' bg-white text-black py-1 md:py-4 px-3 md:px-12 
            rounded-lg bg-opacity-50 text-xl font-semibold hover:bg-opacity-80'>
                Play </button>
                </Link>
                
            {/* <button className=' hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12  rounded-lg bg-opacity-50 hover:bg-opacity-80'>
               ℹ More Info</button> */}
               
        </div>
    </div>
  )
}

export default VedioTitle