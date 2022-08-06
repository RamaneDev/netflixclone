import React, {useState} from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import '../css/Poster.css';


const Poster = (props) =>  {
    
    const [state, setState] = useState({        
            hover:false        
    })   
   

    const showOverlay = () => {
        setState({hover:true});
    }

    const hideOverlay = () => {
        setState({hover:false});
    }

    const remove = () => {
       // redux
       console.log("remove with redux");
    }

    const add =() => {
      // redux
      console.log("add with redux");
    }

   
        return (
            <div className="poster" 
                 onMouseEnter={showOverlay}
                 onMouseLeave={hideOverlay}>
             <Link to={{pathname: `/${props.id}`}}>
               <img className="poster--img" src={props.imgSrc} alt="poster"/>
             </Link>
              
               {state.hover?
               (
                   <div className="poster--overlay">
                       <h3 className="poster--overlay__text">LISTE DE SOUHAITS</h3>
                       {props.whished ? 
                       (
                           <FontAwesome onClick={remove} className="poster--icon" name="heart" size="3x" />
                       ):
                       (
                           <FontAwesome onClick={add} className="poster--icon__not" name="heart-o" size="3x" />
                       )}
                   </div>
               ): null}
            </div>
        )
  
}

export { Poster }