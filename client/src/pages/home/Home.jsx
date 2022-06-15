import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './Home.css'

function Home() {
  const { user } = useSelector((state) => state.auth)

  return (
    <div className="home-container">
        <h2>Welcome to Fantastic Films</h2>
        <br />
        {user ? (
          <Link to="/movies" className="btn-container">
            <button className="movie-btn">Browse films</button>
          </Link>
        ) : (
          <Link to="/login" className="btn-container">
            <button className="movie-btn">Go to login page</button>
          </Link>
        )}
         
    </div>
  )
}

export default Home