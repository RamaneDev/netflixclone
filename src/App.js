import React, {Component} from "react";
import { Header } from "./components";
import './App.css';
import { Home } from "./routes/Home";
import {API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE} from './config'
import axios from "axios";

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

  async componentDidMount() {
    try {
      const {data: {results, page, total_pages}} = await this.loadMovie();
      this.setState({
        movies: results,
        loading:false,
        activePage: page,
        total_pages:total_pages,
        image:`${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
        mTitle: results[0].title,
        mDesc: results[0].overview
      })
      console.log('res', results);
    } catch (error) {
      console.log('e', error);
    }
  }

  loadMovie = async () => {
     const page = this.state.activePage + 1;
     const url = `${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}&language=fr`;
     return await axios.get(url);
  }

  handleSearch = value => {
    // lancer la recherche 
    console.log('handleSearch', value);
  }

  loadMore = () => {
    // charger plus de film
    console.log('load more');
  }
  
  render() {
    return (
      <div className="App">
         <Header badge={this.state.badge} />
         <Home 
           {...this.state}
           onSearchClick={this.handleSearch}
           onButtonClick={this.loadMore}
          />
      </div>
    );
  }
  
 
}

export default App;
