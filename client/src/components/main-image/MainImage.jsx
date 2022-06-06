import React from 'react'
import { Typography } from 'antd'

function MainImage(props) {
    const { Title } = Typography

  return (
    <div style={{
        background: `url('${props.image}'), #1c1c1c`,
        height: '500px',
        backgroundSize: '100% cover',
        backgroundPosition: 'center',
        width: '100%',
        position: 'relative',
        zIndex: -3
        }}
      > 
        <div>
            <div style={{ position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem'}}>
                <Title style={{ color: 'white' }} level={2}>{props.title}</Title>
                <p style={{ color: 'white', fontSize: '1rem'}}>{props.text}</p>
            </div>
        </div>
      </div>
  )
}

export default MainImage