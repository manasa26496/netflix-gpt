import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import { Link } from 'react-router-dom'


const MovieCart = ({posterPath, id}) => {
 
  if(!posterPath) return null;
  return (
  
    <div className='w-36 md:w-48 pr-4 cursor-pointer' >
        <img alt = "Movie Card" src= {IMG_CDN_URL +posterPath }></img>
       
    </div>
  )
}

export default MovieCart