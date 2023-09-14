import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
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
        },
    });

    export const {addNowPlayingMovies,addTrailerVideo}=movieSlice.actions; 
    export default movieSlice.reducer;
