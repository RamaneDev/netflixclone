import React from "react";
import FontAwesome from "react-fontawesome";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../css/Header.css';
import { getNumber } from "../features/movies/moviesSlice";


const Header = (props) => {


        const number = useSelector(getNumber)
    
        return (
          <div className="header">
            <Link to={{pathname:'/'}}>
              <FontAwesome className="header--movie" name="film" size="5x" />
            </Link>
            
            <h3>NETFLIX</h3>
            <Link to={{pathname: '/player'}}>           
              <FontAwesome className="header--heart" name="heart" size="5x" />
            </Link>
            <div className="header--badge">{number}</div>
          </div>
        )   
  
}

export { Header };