import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        trailerVedio:null,
    },
   
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            //update the store

         state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo :(state, action)=>{
            state.trailerVedio=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.top_ratedMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload;
        }
        },
    });

    export const {addNowPlayingMovies,addPopularMovies,addTrailerVideo,addTopRatedMovies,addUpcomingMovies}=movieSlice.actions; 
    export default movieSlice.reducer;
