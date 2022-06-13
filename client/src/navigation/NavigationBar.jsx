import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../redux/auth/authSlice'

import './NavigationBar.css'

const NavigationBar = () => {
    const [show, setShow] = useState(true);

    const history = useHistory();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    function showSwitch() {
        return setShow(!show);
    }

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        history.push('/')
    }

  return (
    <div className="navbar"> 
        <div className="logo">
            Fantastic Films
        </div>
        <div className={show ? "links active" : "links"}>
            {user ? (
                <>
                    <Link onClick={() => showSwitch()} to="/">Home</Link>
                    <Link onClick={() => showSwitch()} to="/about">Developer</Link>
                    <Link onClick={() => showSwitch()} to="/movies">Movies</Link>
                    <button className="logout-btn" onClick={onLogout}>Logout</button>
                </>
            ) : (
                <>    
                    <Link onClick={() => showSwitch()} to="/">Home</Link>
                    <Link onClick={() => showSwitch()} to="/about">Developer</Link>
                    <Link onClick={() => showSwitch()} to="/login">Login</Link>
                    <Link onClick={() => showSwitch()} to="/register">Register</Link>
                </>
            )}
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