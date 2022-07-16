import React, {Component} from "react";
import { Header } from "./components";
import './App.css';
import { Home } from "./routes/Home";

class App extends Component {
  
  render() {
    return (
      <div className="App">
         <Header badge={18} />
         <Home />
      </div>
    );
  }
  
 
}

export default App;
