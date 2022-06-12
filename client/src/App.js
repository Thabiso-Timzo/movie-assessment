import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import NavigationBar from './navigation/NavigationBar'
import Home from './pages/home/Home'
import PopularFilms from './pages/popular/PopularFilms'
import About from './pages/about/About'
import MovieDetailedPage from './pages/movies/MovieDetailedPage'
import Login from './authentication/login/Login'
import Register from './authentication/register/Register'

function App() {
  return (
    <>
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<PopularFilms />} />
        <Route path="/movie/:movieId" element={<MovieDetailedPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
    </>
  );
}

export default App;
