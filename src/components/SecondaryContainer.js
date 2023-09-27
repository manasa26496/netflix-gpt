import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies);
  return (
    movies.nowPlayingMovies &&(
      <div className=' bg-black'>
    <div className=' -mt-60  pl-12  relative z-20 '>
     
     <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
     <MovieList title={"Top Rated Movies"} movies={movies.top_ratedMovies}/>
     <MovieList title={"What's Popular?"} movies={movies.popularMovies}/>
     <MovieList title={"Upcoming movies"} movies={movies.upcomingMovies}/>
     </div>
    </div>
    )
  )
}

export default SecondaryContainer