import { createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";


const moviesAdapter = createEntityAdapter()

const initialState = moviesAdapter.getInitialState({})


const moviesSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        addMovie(state, action) {
          const movies = JSON.parse(localStorage.getItem("movies"))        
          if(movies) {
              const moviesArray = [...movies]
              moviesArray.push(action.payload)
          } else {
              const moviesArray = []
              moviesArray.push(action.payload)
          }
          localStorage.setItem("movies", JSON.stringify(moviesArray))
          moviesAdapter.addOne
        },
        removeMovie: moviesAdapter.removeOne,
        getMovies(state, action) {
           const movies = JSON.parse(localStorage.getItem("movies"))
           if(movies) {
            const moviesArray = [...movies]
            moviesAdapter.setAll(state, moviesArray)
           }     
        }
    }
})

export const {addMovie, removeMovie, getMovies } = moviesSlice.actions

export default moviesSlice.reducer

export const {
selectAll: selectMovies,
selectById: selectMovieById,
selectTotal: getNumber

} = moviesAdapter.getSelectors(state => state.movies)

