import React, {Component} from "react";
import FontAwesome from "react-fontawesome";
import '../css/SearchBar.css';

class Searchbar extends Component {

    state = {
        value:""
    }
    handleChange = e => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        const {value} = this.state;
        return (
            <div className="searchBar--container">
                <div className="searchBar">
                  <input
                     className="searchBar--input"
                     value={this.state.value}
                     type="text"
                     placeholder="Rechercher un film"
                     onChange={this.handleChange} />
                </div>
                <div className="searchBar--submit"
                     onClick={() => this.props.onSearchClick(value)}>
                    <FontAwesome name="search" />
                </div>

            </div>
        )
    }
}

export { Searchbar };