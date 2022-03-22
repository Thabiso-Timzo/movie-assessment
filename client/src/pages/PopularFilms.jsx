import React, { useEffect, useState } from 'react'

import './PopularFilms.css'
import { API_KEY, API_URL, IMAGE_URL } from '../components/Config'
import MainImage from '../components/MainImage'
import GridCard from '../components/GridCard'

function PopularFilms() {
  const [Movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => { 
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    fetchMovies(endpoint)
  },[])

  /**
   * Movies are fetched
   */
  const fetchMovies = (path) => {
    fetch(path)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      setMovies(response.results)
      setCurrentPage(response.page)
    })
  }

  /**
   * when the button is clicked it will trigger this function 
   */
  const handleClick = () => {
    let endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage + 1}`
    fetchMovies(endpoint)
  }
  
  return (
    <>
      <div className="popular-film-hidden-div"></div>
      <div className="popular-film-container">
        {Movies[0] &&
          <MainImage 
            image={`${IMAGE_URL}w1280${Movies[0].backdrop_path && Movies[0].backdrop_path}`} 
            title={Movies[0].original_title}
            text={Movies[0].overview}
          />
        }
        <div className="movies-child-container">
          <h3>Movies by lastest</h3>
          <hr />
          <div>
            {Movies && Movies.map((movie, index) => {
              return (
                <React.Fragment key={index}>
                  <GridCard 
                    image={movie.poster_path && `${IMAGE_URL}w200${movie.poster_path}`}
                    movieId={movie.id}
                    title={movie.original_title}
                  />
                </React.Fragment>
              )
            })}
          </div>
          <br />
          <div>
            <button className="popular-film-btn" onClick={handleClick}>More Movies</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopularFilms