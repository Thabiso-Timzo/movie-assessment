import React, { useEffect, useState } from 'react'
import { Row, Descriptions } from 'antd'

import './MovieDetailedPage.css'
import { API_KEY, API_URL, IMAGE_URL } from '../components/Config'
import MainImage from '../components/MainImage'
import GridCard from '../components/GridCard'

function MovieDetailedPage(props) {
  const [Movie, setMovie] = useState([])
  const [Crews, setCrews] = useState([])
  const [ActorToggle, setActorToggle] = useState(false)

  useEffect(() => {
    const movieId = props.match.params.movieId
    fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.json())
    .then(response => {
      setMovie(response)
      fetch(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setCrews(response.cast)
      })
    })
  })

  const handleClick = () => {
    setActorToggle(!ActorToggle)
  }

  return (
    <>
    <div className="movie-hidden-div"></div>
    <div>
      {Movie &&
          <MainImage 
            image={`${IMAGE_URL}w1280${Movie.backdrop_path && Movie.backdrop_path}`} 
            title={Movie.original_title}
            text={Movie.overview}
          />
        }
        <div className="movie-detailed-container">
          <div className="movie-inner-container">
            <button>Add to Favourite</button>
          </div>
          <Descriptions title="Movie info" bordered>
            <Descriptions.Item label="Title">{Movie.original_title}</Descriptions.Item>
            <Descriptions.Item label="release_date">{Movie.release_date}</Descriptions.Item>
            <Descriptions.Item label="revenue">{Movie.revenue}</Descriptions.Item>
            <Descriptions.Item label="runtime">{Movie.runtime}</Descriptions.Item>
            <Descriptions.Item label="vote_average" span={2}>
              {Movie.vote_average}
            </Descriptions.Item>
            <Descriptions.Item label="vote_count">{Movie.vote_count}</Descriptions.Item>
            <Descriptions.Item label="status">{Movie.status}</Descriptions.Item>
            <Descriptions.Item label="popularity">{Movie.popularity}</Descriptions.Item>
          </Descriptions>
          <div className="movie-lower-container">
            <button onClick={handleClick}>Toggle Actor View</button>
          </div>
          {ActorToggle && 
            <Row gutter={[16, 16]}>
            {Crews && Crews.map((crew, index) => {
              return (
                <React.Fragment key={index}>
                  {crew.profile_path && 
                    <GridCard 
                      actor
                      image={`${IMAGE_URL}w500${crew.profile_path}`}
                    />
                  }
                </React.Fragment>
              )
            })}
          </Row>
          }
        </div>
    </div>
    </>
  )
}

export default MovieDetailedPage