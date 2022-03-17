import React, { useEffect, useState } from 'react'
import { API_KEY, API_URL } from '../components/Config'
import { Row } from 'antd'

function PopularFilms() {
  const [movies, setMovies] = useState([])

  useEffect(() => { 
    fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      setMovies(response.results)
    })
  },[])

  return (
      <Row gutter={[16, 16]}>
          {/*
            movies.map((movie, index) => {

            })
          */}
      </Row>
  )
}

export default PopularFilms