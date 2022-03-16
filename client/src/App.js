import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//import './App.css'
import NavigationBar from './navigation/NavigationBar'
import Home from './pages/Home'
import PopularFilms from './pages/PopularFilms'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movies" component={PopularFilms} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
