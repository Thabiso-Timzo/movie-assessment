import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'antd'

import './GridCard.css'

function GridCard(props) {

  if (props.actor) {
    return (
      <Col lg={6} md={8} xs={24}>
        <div className="grid-container">
          <img  
            className="grid-image" 
            alt=""
            src={props.image}
          />
        </div>
      </Col>
    )
  } else {
    return (
      <Col lg={6} md={8} xs={24}>
      <div className="grid-container">
        <Link to={`/movie/${props.movieId}`}>
            <img  
              className="grid-image" 
              alt=""
              src={props.image}
            />
        </Link>
      </div>
      </Col>
    )
  }
}

export default GridCard