import React from 'react'

const VedioTitle = ({title, overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%]  px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className=' w-1/2 py-1'>{overview}</p>
        <div className="">
            <button className=' bg-white text-black p-4 px-12  
            rounded-lg bg-opacity-50 text-xl hover:bg-opacity-80'>
                Play</button>
            <button className=' mx-2 bg-gray-500 text-white p-3 px-10  rounded-lg bg-opacity-50 text-lg hover:bg-opacity-80'>
               ℹ More Info</button>
        </div>
    </div>
  )
}

export default VedioTitle