import React, {Component} from "react";
import { Header, Spinner } from "./components";
import './App.css';
import { Home } from "./routes/Home";
import {API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE} from './config'
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details, MoviePlayer, NotFound } from "./routes";
import Login from "./routes/Login";
import { UserAuthContextProvider } from "./context/userAuthContext";

class App extends Component {

  state = {
    loading:true,
    movies:[],
    badge:0,
    image:null,
    mTitle:'',
    mDesc: '',
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
    } catch (error) {
      console.log('e', error);
    }
  }

  loadMovie = async () => {
     const page = this.state.activePage + 1;
     const url = `${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}&language=fr`;
     return await axios.get(url);
  }

  searchMovie = async () => {   
     const url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${this.state.searchText}&language=fr`;
     return await axios.get(url);
  }

  handleSearch = (value) => {
    // lancer la recherche 
    try {
      this.setState({
        loading:true,
        searchText:value
      },
      async () => {
        const {data: {results, page, total_pages}} = await this.searchMovie();
        this.setState({
          movies: results,
          loading:false,
          activePage: page,
          total_pages:total_pages,
          image:`${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
          mTitle: results[0].title,
          mDesc: results[0].overview
        })      
      })     
       
     } catch (error) {
       console.log('e', error)
       
     }
 
  }

  loadMore = async () => {
    this.setState({
      loading:true
    })
     try {
      const {data: {results, page, total_pages}} = await this.loadMovie();
      this.setState({
        movies: [...this.state.movies,...results],
        loading:false,
        activePage: page,
        total_pages:total_pages,
        image:`${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
        mTitle: results[0].title,
        mDesc: results[0].overview
      })      
       
     } catch (error) {
       console.log('e', error)
       
     }
  
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header badge={this.state.badge} />
          {!this.state.image?
          (
              <Spinner />
          ):
          (
            <UserAuthContextProvider>
              <Routes>
                <Route path="" exact element={ <Home {...this.state}  onSearchClick={this.handleSearch} onButtonClick={this.loadMore}  /> } />
                <Route path="/login" element={<Login />} /> 
                <Route path="/player" exact element= {<MoviePlayer />}  />
                <Route path="/player/:id" exact element= {<MoviePlayer />}  />
                <Route path="/:id" exact element={ <Details /> }     />
                <Route element={ <NotFound /> }     />               
            </Routes>
           </UserAuthContextProvider>
         
          )}
       
        </div>
      </BrowserRouter>
     
    );
  }
  
 
}

export default App;
