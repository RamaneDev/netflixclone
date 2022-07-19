import React, {Component} from "react";
import { Poster } from "./Poster";
import '../css/PosterList.css';
import {IMAGE_BASE_URL, POSTER_SIZE} from '../config';

class PosterList extends Component {
    
    renderPoster = () => {
        return this.props.movies.map( movie => {
            const imgSrc = `${IMAGE_BASE_URL}/${POSTER_SIZE}/${movie.poster_path}`;
            const wish = false;
            return (
                <Poster 
                   key={movie.id}
                   imgSrc={imgSrc}                
                   whished={wish}
                   movie={movie}
                   mTitle={movie.title}
                   mDesc={movie.overview}                       
                />
            )
        })
    }
    
    render() {
        return (
            <div className="posterList">
                <h3 className="posterList--title">NOUVEAUX FILMS</h3>
                <div className="posterList--grid">
                   {this.renderPoster()}
                </div>
            </div>

        )
    }
}

export { PosterList }