import React, { useEffect, useState } from 'react'
import { Typography, Row } from 'antd'

import { API_KEY, API_URL, IMAGE_URL } from '../components/Config'
import MainImage from '../components/MainImage'
import GridCard from '../components/GridCard'

function PopularFilms() {
  const [Movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const { Title } = Typography

  useEffect(() => { 
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    fetchMovies(endpoint)
  },[])

  const fetchMovies = (path) => {
    fetch(path)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      setMovies(response.results)
      setCurrentPage(response.page)
    })
  }

  const handleClick = () => {
    let endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage + 1}`
    fetchMovies(endpoint)
  }

  return (
    <div style={{ width: '100%', margin: 0}}>
        {Movies[0] &&
          <MainImage 
            image={`${IMAGE_URL}w1280${Movies[0].backdrop_path && Movies[0].backdrop_path}`} 
            title={Movies[0].original_title}
            text={Movies[0].overview}
          />
        }
        <div style={{ width: '85%', margin: '1rem auto' }}>
          <Title level={2}>Movies by lastest</Title>
          <hr />
          <Row>
            {Movies && Movies.map((movie, index) => {
              return (
                <React.Fragment key={index}>
                  <GridCard 
                    image={movie.poster_path && `${IMAGE_URL}w200${movie.poster_path}`}
                    movieId={movie.id}
                  />
                </React.Fragment>
              )
            })}
          </Row>
          <br />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={handleClick}>Load more</button>
          </div>
        </div>
    </div>
  )
}

export default PopularFilms