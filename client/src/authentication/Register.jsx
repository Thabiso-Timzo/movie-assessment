import React from 'react'
import { Link } from 'react-router-dom'

import './Register.css'

function Register() {
  return (
    <div className="register-container">
        <form>
            <div className="register-form-content">
                <div className="register-form">
                <div className="register-title">Register</div>
                <div className="register-boxes">
                    <div className="register-input-box">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Enter your name" required />
                    </div>
                    <br />
                    <div className="register-input-box">
                        <i className="fas fa-envelope"></i>
                        <input type="text" placeholder="Enter your last name" required />
                    </div>
                    <br />
                    <div className="register-input-box">
                        <i className="fas fa-envelope"></i>
                        <input type="text" placeholder="Enter your email" required />
                    </div>
                    <br />
                    <div className="register-input-box">
                        <i className="fas fa-envelope"></i>
                        <input type="text" placeholder="Enter your last password" required />
                    </div>
                    <br />
                    <div className="register-btn">
                        <button>Register</button>
                    </div>
                    <br />
                    <div className="register-account">Already have an account? <Link className="register-login-link" to="/login">Login now</Link></div>
                </div>
            </div>
            </div>
        </form>
    </div>
  )
}

export default Register