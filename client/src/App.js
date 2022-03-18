import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//import './App.css'
import NavigationBar from './navigation/NavigationBar'
import Home from './pages/Home'
import PopularFilms from './pages/PopularFilms'
import About from './pages/About'
import MovieDetailedPage from './pages/MovieDetailedPage'

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movies" component={PopularFilms} />
        <Route path="/movie/:movieId" component={MovieDetailedPage, null} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
