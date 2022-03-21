import React from 'react'
import { Link } from 'react-router-dom'

import './Login.css'

function Login() {
  return (
    <div className="login-container">
        <form>
           <div className="login-form-content">
           <div className="login-form">
                <div className="login-title">Login</div>
                <div className="login-input-boxes">
                    <div className="login-input-box">
                        <i className="fas fa-envelope"></i>
                        <input type="text" placeholder="Enter your email" required />
                    </div>
                    <br />
                    <div className="login-input-box">
                        <i className="fas fa-envelope"></i>
                        <input type="text" placeholder="Enter your password" required />
                    </div>
                    <br />
                    <div><Link className="login-link" to="#">Forgot password</Link></div>
                    <br />
                    <div className="login-btn">
                        <button>Login</button>
                    </div>
                    <br />
                    <div className="login-account">Don't have an account? <Link className="login-register-link"to="/register">Register now</Link></div>
                </div>
            </div>
           </div>
        </form>
    </div>
  )
}

export default Login