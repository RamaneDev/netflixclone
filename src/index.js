import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { getMovies } from './features/movies/moviesSlice';
import store from './store';

store.dispatch(getMovies())

ReactDOM.render(<React.StrictMode>
  <Provider store={store}>
     <App />
  </Provider>
</React.StrictMode>, 

      document.getElementById('root'));
