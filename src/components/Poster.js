import React, {Component} from "react";
import FontAwesome from "react-fontawesome";
import '../css/Poster.css';


class Poster extends Component {
    state = {
        hover:false
    }

    showOverlay = () => {
        this.setState({hover:true});
    }

    hideOverlay = () => {
        this.setState({hover:false});
    }

    remove = () => {
       // redux
       console.log("remove with redux");
    }

    add =() => {
      // redux
      console.log("add with redux");
    }

    render() {
        return (
            <div className="poster" 
                 onMouseEnter={this.showOverlay}
                 onMouseLeave={this.hideOverlay}>
               <img className="poster--img" src={this.props.imgSrc} alt="poster"/>
               {this.state.hover?
               (
                   <div className="poster--overlay">
                       <h3 className="poster--overlay__text">LISTE DE SOUHAITS</h3>
                       {this.props.whished ? 
                       (
                           <FontAwesome onClick={this.remove} className="poster--icon" name="heart" size="3x" />
                       ):
                       (
                           <FontAwesome onClick={this.add} className="poster--icon__not" name="heart-o" size="3x" />
                       )}
                   </div>
               ): null}
            </div>
        )
    }
}

export { Poster }