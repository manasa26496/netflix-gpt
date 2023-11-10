import React from 'react'
import MovieCart from './MovieCart';
import { Link } from 'react-router-dom';


const MovieList = ({title,movies}) => {
  return (
    <div className=' px-6 '>
        <h1 className=' text-lg md:text-3xl py-4 text-white'>{title}</h1>
        <div className="  flex overflow-x-scroll">
            <div className='flex'>
            
                {movies &&
                movies?.map((movies)=>{
                  return(
                    <Link to = {"/movie/"+movies.id}>
        <MovieCart key={movies.id} posterPath={movies.poster_path} id={movies?.id}/>
        </Link>
                 );
                  })}
        </div>
        </div>
    </div>
  )
}

export default MovieList