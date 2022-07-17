import React, {Component} from "react";
import FontAwesome from "react-fontawesome";
import '../css/SearchBar.css';

class Searchbar extends Component {
    render() {
        return (
            <div className="searchBar--container">
                <div className="searchBar">
                  <input
                     className="searchBar--input"
                     type="text"
                     placeholder="Rechercher un film" />
                </div>
                <div className="searchBar--submit">
                    <FontAwesome name="search" />
                </div>

            </div>
        )
    }
}

export { Searchbar };