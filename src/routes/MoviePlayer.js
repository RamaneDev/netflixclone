import React from "react"
import { MvPlayerList, VideoPlayer } from "../components"
import '../css/MoviePlayer.css'



const MoviePlayer = (props) => {
    
    
    const selectedMovie = {
        duration : '2h 9m',
        id: 429617,
        imageUrl: 'http://image.tmdb.org/t/p/w1280/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg',
        position: 1,
        title: 'Spider-Man : Far from home',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

    }
    
    const movies = [
        {
            duration : '2h 9m',
            id: 429617,
            imageUrl: 'http://image.tmdb.org/t/p/w1280/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg',
            position: 1,
            title: 'Spider-Man : Far from home',
            videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    
        },
        {
            duration : '2h 9m',
            id: 429618,
            imageUrl: 'http://image.tmdb.org/t/p/w1280/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg',
            position: 1,
            title: 'Spider-Man : Far from home',
            videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    
        },
        {
            duration : '2h 9m',
            id: 429619,
            imageUrl: 'http://image.tmdb.org/t/p/w1280/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg',
            position: 1,
            title: 'Spider-Man : Far from home',
            videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    
        },
        {
            duration : '2h 9m',
            id: 429620,
            imageUrl: 'http://image.tmdb.org/t/p/w1280/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg',
            position: 1,
            title: 'Spider-Man : Far from home',
            videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    
        },
        {
            duration : '2h 9m',
            id: 429621,
            imageUrl: 'http://image.tmdb.org/t/p/w1280/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg',
            position: 1,
            title: 'Spider-Man : Far from home',
            videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    
        }
    ]

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