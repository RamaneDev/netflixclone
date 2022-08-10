import React from "react";
import { Link } from "react-router-dom";
import '../css/MvPlayerListItem.css'

const MvPlayerListItem = (props) => {
const activeClass = props.active ? 'mvPlayerListItem active' : 'mvPlayerListItem'
  
const handleSelectedMovie = () => {
  props.handleSelectedMovie(props.id)
}


return (
      <>
      <Link to={{pathname: `/player/${props.id}`}} style={{color: "white", textDecoration:"none"}}>
      
          <div className={activeClass} onClick={handleSelectedMovie}>
              <div className="mvPlayerListItem--number">{props.number}</div>
              <div className="mvPlayerListItem--title">{props.title}</div>
              <div className="mvPlayerListItem--time">{props.duration}</div>
          </div>
          <div className="mvPlayerListItem--divider"></div>
        </Link>
      </>
  )

}

export { MvPlayerListItem }