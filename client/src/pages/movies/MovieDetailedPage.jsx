import React, { useEffect, useState } from 'react'
import { Row } from 'antd'

import './MovieDetailedPage.css'
import { API_KEY, API_URL, IMAGE_URL } from '../../components/config/Config'
import MainImage from '../../components/main-image/MainImage'
import GridCard from '../../components/grid-card/GridCard'

function MovieDetailedPage(props) {
  const [Movie, setMovie] = useState([])
  const [Crews, setCrews] = useState([])
  const [ActorToggle, setActorToggle] = useState(false)

  const movieId = props.match.params.movieId

  useEffect(() => {
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
          <table>
            <tr>
              <th>Movie information</th>
            </tr>
            <tr>
              <td>Title</td>
              <td>{Movie.original_title}</td>
            </tr>
            <tr>
              <td>Release date</td>
              <td>{Movie.release_date}</td>
            </tr>
            <tr>
              <td>Revenue</td>
              <td>{Movie.revenue}</td>
            </tr>
            <tr>
              <td>RunTime</td>
              <td>{Movie.runtime}</td>
            </tr>
            <tr>
              <td>Vote average</td>
              <td>{Movie.vote_average}</td>
            </tr>
            <tr>
              <td>Vote count</td>
              <td>{Movie.vote_count}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>{Movie.status}</td>
            </tr>
            <tr>
              <td>popularity</td>
              <td>{Movie.popularity}</td>
            </tr>
          </table>
          <br />
          <div>
            <button className="movie-lower-btn" onClick={handleClick}>Actor/Actress View</button>
          </div>
          <br />
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