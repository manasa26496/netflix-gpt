import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'


const MovieCart = ({posterPath,movieResults,movieNames}) => {
  const handlemovie=()=>{
  
  }
  if(!posterPath) return null;
  return (
    <div className='w-36 md:w-48 pr-4 cursor-pointer' onClick={handlemovie}>
        <img alt = "Movie Card" src= {IMG_CDN_URL +posterPath }></img>
    </div>
  )
}

export default MovieCart