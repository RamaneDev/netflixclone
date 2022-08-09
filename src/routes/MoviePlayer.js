import React from "react"
import { MvPlayerList, VideoPlayer } from "../components"
import '../css/MoviePlayer.css'
import store from '../store';



const MoviePlayer = (props) => {
    

    const state = store.getState()
    const movies = Object.values(state.movies.entities)
    const selectedMovie = movies[0]
    
    // const selectedMovie = {
    //     duration : '2h 9m',
    //     id: 429617,
    //     imageUrl: 'http://image.tmdb.org/t/p/w1280/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg',
    //     position: 1,
    //     title: 'Spider-Man : Far from home',
    //     videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

    // }
    
    

    return(
        <div className="moviePlayer">
             <VideoPlayer 
                videoUrl = {selectedMovie.videoUrl}
                imageUrl = {selectedMovie.imageUrl}
             />
             <MvPlayerList 
               movies={movies}
               selectedMovie={selectedMovie}
              />
        </div>
    )
}

export { MoviePlayer }