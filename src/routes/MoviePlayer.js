import React, { useState } from "react"
import { MvPlayerList, VideoPlayer } from "../components"
import '../css/MoviePlayer.css'
import store from '../store';



const MoviePlayer = (props) => {

    const movies = Object.values(store.getState().movies.entities)   

    const [state, setState] = useState({
        selectedMovie: movies[0]
    })    
    

    const handleSelectedMovie = (idSelectedMovie) => {
        if(idSelectedMovie !== state.selectedMovie.id) {
            const movie = movies.find(movie => movie.id === idSelectedMovie)
            setState({
                selectedMovie:movie
            })
        }
    }
    
    

    return(
        <div className="moviePlayer">
             <VideoPlayer 
                videoUrl = {state.selectedMovie.videoUrl}
                imageUrl = {state.selectedMovie.imageUrl}
             />
             <MvPlayerList 
               movies={movies}
               selectedMovie={state.selectedMovie}
               handleSelectedMovie={handleSelectedMovie}
              />
        </div>
    )
}

export { MoviePlayer }