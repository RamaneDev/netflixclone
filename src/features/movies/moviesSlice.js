import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { API_KEY, API_URL, BACKDROP_SIZE, IMAGE_BASE_URL } from "../../config";
import { calcTime } from "../../utils/helpers";


const moviesAdapter = createEntityAdapter()

const initialState = moviesAdapter.getInitialState({})

export const getMovieDuration = createAsyncThunk('movies/saveNewMovie', async (movie) => {
    const url =`${API_URL}/movie/${movie.id}?api_key=${API_KEY}&language=fr`;   
    const response = await fetch(url);    
    const { runtime } = await response.json();

    const movietoStore = {...movie, 
                          duration: calcTime(runtime),
                          imageUrl: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${movie.backdrop_path}`,
                          videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    
    }
       let movies = JSON.parse(localStorage.getItem('movies'))
       if(movies) {
           let newArray = [...movies]
           newArray.push(movietoStore)
           localStorage.setItem('movies', JSON.stringify(newArray))
       } else {
           let newArray = []
           newArray.push(movietoStore)
           localStorage.setItem('movies', JSON.stringify(newArray))

       }
     
    return movietoStore
})


const moviesSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        removeMovie(state, action) {
            moviesAdapter.removeOne(state, action.payload)
            const movies = JSON.parse(localStorage.getItem("movies"))
            let moviesArray = [...movies]
            moviesArray = moviesArray.filter(mv => mv.id !== action.payload)
            localStorage.setItem("movies", JSON.stringify(moviesArray))
        },
        getMovies(state, action) {
           const movies = JSON.parse(localStorage.getItem("movies"))
           if(movies) {
            const moviesArray = [...movies]
            moviesAdapter.setAll(state, moviesArray)
           }     
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getMovieDuration.fulfilled, moviesAdapter.addOne)
    }
})

export const {removeMovie, getMovies } = moviesSlice.actions

export default moviesSlice.reducer

export const {
selectAll: selectMovies,
selectById: selectMovieById,
selectTotal: getNumber

} = moviesAdapter.getSelectors(state => state.movies)

