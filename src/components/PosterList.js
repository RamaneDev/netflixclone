import React from "react";
import { Poster } from "./Poster";
import '../css/PosterList.css';
import {IMAGE_BASE_URL, POSTER_SIZE} from '../config';
import { useSelector } from "react-redux";
import { selectMovies } from "../features/movies/moviesSlice";

const PosterList = (props) => {  
  
       
    const funMovies = useSelector(selectMovies)    
      
    const renderPoster = () => {    
       

        return  props.movies.map( movie => {
            const imgSrc = `${IMAGE_BASE_URL}/${POSTER_SIZE}/${movie.poster_path}`;
            let wish = false;
            funMovies.forEach(mv => {
                if(mv.id === movie.id) {
                    wish = true
                }
            })
            
            return (
                <Poster 
                   key={movie.id}
                   imgSrc={imgSrc}                
                   whished={wish}
                   movie={movie}
                   mTitle={movie.title}
                   mDesc={movie.overview}
                   id={movie.id}                       
                />
            )
        })
    }   
    
        
        return (
            <div className="posterList">
                <h3 className="posterList--title">NOUVEAUX FILMS</h3>
                <div className="posterList--grid">
                   {renderPoster()}
                </div>
            </div>

        )
    
}

export { PosterList }