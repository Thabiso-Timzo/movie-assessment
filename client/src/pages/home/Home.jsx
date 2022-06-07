import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

function Home() {
  //const API_KEY = d4f7b87d7cedfdfbbb297f46aa3e8779

  return (
    <div className="home-container">
        <h2>Welcome to Fantastic Films</h2>
        <br />
        <Link to="/movies" className="btn-container">
          <button className="movie-btn">Browse films</button>
        </Link> 
    </div>
  )
}

export default Home