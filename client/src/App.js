import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavigationBar from './navigation/NavigationBar'
import Home from './pages/Home'
import PopularFilms from './pages/PopularFilms'
import About from './pages/About'
import MovieDetailedPage from './pages/MovieDetailedPage'
import Login from './authentication/Login'
import Register from './authentication/Register'

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movies" component={PopularFilms} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/movie/:movieId" component={MovieDetailedPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
