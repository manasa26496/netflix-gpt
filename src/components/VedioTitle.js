import React from 'react'

const VedioTitle = ({title, overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%]  px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl  font-bold'>{title}</h1>
        <p className=' hidden md:inline-block w-1/4 py-6 text-lg'>{overview}</p>
        <div className="my-4 md:m-0">
            <button className=' bg-white text-black py-1 md:py-4 px-3 md:px-12 
            rounded-lg bg-opacity-50 text-xl font-semibold hover:bg-opacity-80'>
                Play</button>
            <button className=' hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12  rounded-lg bg-opacity-50 hover:bg-opacity-80'>
               ℹ More Info</button>
        </div>
    </div>
  )
}

export default VedioTitle