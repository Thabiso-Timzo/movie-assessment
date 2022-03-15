import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavigationBar.css'
import MenuList from './MenuList'

function NavigationBar() {

    const menuList = MenuList.map(({url, title}, index) => {
        return (
            <li key={index}>
                <a href={url}>{title}</a>
            </li>
        )
    })

    return (
        <nav>
            <div className="nav-fantastic-films">
                <NavLink to="/fantasticFilms">
                    <p className="nav-logo">Fantastic<br />Films</p>
                </NavLink>
            </div>
            <ul className="nav-menu-list">
                {menuList}
            </ul>
        </nav>
    )
} 

export default NavigationBar