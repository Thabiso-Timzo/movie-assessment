import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './NavigationBar.css'
import MenuList from './MenuList'

function NavigationBar() {
    const [clicked, setClick] = useState(false);

    const menuList = MenuList.map(({url, title}, index) => {
        return (
            <li key={index}>
                <NavLink 
                    exact 
                    to={url}
                    style={{
                        textDecoration:"none",
                        color: "grey",
                        fontWeight: 700,
                        fontSize: 18,
                        paddingTop: 10,
                    }}
                >
                    {title}
                </NavLink>
            </li>
        )
    })

    const handleClick = () => {
        setClick(!clicked)
    }

    return (
        <div className="nav-main-container">
            <div className="nav-first-container">
                <NavLink className="nav-left-link" to="/" style={{textDecoration:"none"}}>
                   <p className="logo">Fantastic</p> 
                   <p className="logo">Films</p> 
                </NavLink>
            </div>
            <div className="nav-second-container">
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={clicked ? "menu-list" : "menu-list close"}>
                    {menuList}
                </ul>
            </div>
        </div>
    )
} 

export default NavigationBar