import logo from './logo.svg';
import './App.css';
import { Collection } from './components/Collection';
import { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import MovieGrid from './pages/MovieGrid';





function App() {

  // const [movies, setMovies] = useState([]);

  // userEffect (() => {setMovies(movies90s) }, [])
  
  return (


<Router>
  <Navbar />
  <Switch>
    <Route path="/about">
      <About />

    </Route>
    <Route path="/">
      <MovieGrid />
    </Route>
  </Switch>
</Router>
  );
}

export default App;
