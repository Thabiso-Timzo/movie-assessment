import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavigationBar from './navigation/NavigationBar'
import Home from './pages/home/Home'
import PopularFilms from './pages/popular/PopularFilms'
import About from './pages/about/About'
import MovieDetailedPage from './pages/movies/MovieDetailedPage'

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movies" component={PopularFilms} />
        <Route path="/movie/:movieId" component={MovieDetailedPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
