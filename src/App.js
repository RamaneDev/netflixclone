import React, {Component} from "react";
import { Header } from "./components";
import './App.css';
import { Home } from "./routes/Home";

class App extends Component {

  state = {
    loading:false,
    movies:[
      {
        backdrop_path: './images/Fast_large.jpg',
        id: 475557,
        overview:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis in quos impedit? Iure officia fugit nostrum blanditiis! Blanditiis voluptatem consectetur, eos fugiat explicabo maiores, optio perferendis rem quas perspiciatis quos?",
        poster_path: './images/Fast_small.jpg',
        title: "Fast and Furious"
      },
      {
          backdrop_path: './images/Fast_large.jpg',
          id: 475558,
          overview:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis in quos impedit? Iure officia fugit nostrum blanditiis! Blanditiis voluptatem consectetur, eos fugiat explicabo maiores, optio perferendis rem quas perspiciatis quos?",
          poster_path: './images/Fast_small.jpg',
          title: "Fast and Furious"
        },
        {
          backdrop_path: './images/Fast_large.jpg',
          id: 475559,
          overview:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis in quos impedit? Iure officia fugit nostrum blanditiis! Blanditiis voluptatem consectetur, eos fugiat explicabo maiores, optio perferendis rem quas perspiciatis quos?",
          poster_path: './images/Fast_small.jpg',
          title: "Fast and Furious"
        },
        {
          backdrop_path: './images/Fast_large.jpg',
          id: 475554,
          overview:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis in quos impedit? Iure officia fugit nostrum blanditiis! Blanditiis voluptatem consectetur, eos fugiat explicabo maiores, optio perferendis rem quas perspiciatis quos?",
          poster_path: './images/Fast_small.jpg',
          title: "Fast and Furious"
        },
    ],
    badge:0,
    image:'./images/Fast_large.jpg',
    mTitle:'Fast and Furious',
    mDesc: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    activePage:0,
    totalPages:0,
    searchText:""
  }

  handleSearch = value => {
    // lancer la recherche 
    console.log('handleSearch', value);
  }
  
  render() {
    return (
      <div className="App">
         <Header badge={this.state.badge} />
         <Home 
           {...this.state}
           onSearchClick={this.handleSearch}
          />
      </div>
    );
  }
  
 
}

export default App;
