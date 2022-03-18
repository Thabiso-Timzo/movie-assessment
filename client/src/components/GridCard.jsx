import React from 'react'
import { Col } from 'antd'
import { Link } from 'react-router-dom'

function GridCard(props) {
  return (
    <Col lg={6} md={8} xs={24}>
        <div style={{ position: 'relative' }}>
            <a href={`/movie/${props.movieId}`}>
                <img  
                    style={{ width: '20%', height: '320px'}} 
                    alt=""
                    src={props.image}
                />
            </a>
        </div>
    </Col>
  )
}

export default GridCard