import React from 'react'
import { Link } from 'react-router-dom'

import './GridCard.css'

function GridCard(props) {
  return (
    <div className="grid-container">
      <Link to={`/movie/${props.movieId}`}>
        <div className="title">
          <img  
            className="grid-image" 
            alt=""
            src={props.image}
          />
          {/*<p>{props.title}</p>*/}
        </div>
      </Link>
    </div>
  )
}

export default GridCard