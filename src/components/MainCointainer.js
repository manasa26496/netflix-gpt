import React from 'react'
import { useSelector } from 'react-redux'
import VedioTitle from './VedioTitle'
import VideoBackground from './VideoBackground'

const MainCointainer = () => {
    const movies= useSelector(store=>store.movies?.nowPlayingMovies)
    if(!movies) return;
    //if movies isn't present then return
    
    const mainMovie = movies[0];
   
  
    const {original_title,overview,id} = mainMovie;
    return (
    <div className='pt-[30%] bg-black md:pt-0'>
        < VedioTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>


    </div>
  )
}

export default MainCointainer