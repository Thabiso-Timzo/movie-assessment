import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css'
import NavigationBar from './navigation/NavigationBar'
import Home from './pages/Home'
import FantasticFilms from './pages/FantasticFilms'
import PopularFilms from './pages/PopularFilms'
import About from './pages/About'

function App() {
  return (
    <div className="container">
        <BrowserRouter>
          <NavigationBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/fantasticFilms" component={FantasticFilms} />
            <Route path="/about" component={About} />
            <Route path="/popularFilms" component={PopularFilms} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
