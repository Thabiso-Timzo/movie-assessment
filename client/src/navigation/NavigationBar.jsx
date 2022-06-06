import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './NavigationBar.css'

const NavigationBar = () => {
    const [show, setShow] = useState(true)

    function showSwitch() {
        return setShow(!show)
    }

  return (
    <div className="navbar"> 
        <div className="logo">
            Fantastic Films
        </div>
        <div className={show ? "links active" : "links"}>
            <Link onClick={() => showSwitch()} to="/">Home</Link>
            <Link onClick={() => showSwitch()} to="/movies">Movies</Link>
            <Link onClick={() => showSwitch()} to="/about">Developer</Link>
            <Link onClick={() => showSwitch()} to="/login">Login</Link>
        </div>
        <div 
            className={show ? "bars-button active" : "bars-button"} 
            onClick={() => showSwitch()}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
  )
}

export default NavigationBar