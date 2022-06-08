import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc";
 
import './Login.css'
import image1 from '../../images/1.jpg'

const Login = () => {
  return (
    <section>
        <div className="image-box">
            <img src={image1} alt="" />
        </div>
        <div className="content-box">
            <div className="form-box">
                <h2>Login</h2>
                <form>
                    <div className="input-box">
                        <span>Username</span>
                        <input type="text" />
                    </div>
                    <div className="input-box">
                        <span>Password</span>
                        <input type="password" />
                    </div>
                    <div className="remember">
                        <label htmlFor="">
                            <input type="checkbox" /> Remember me
                        </label>
                    </div>
                    <div className="input-box">
                        <button>Login</button>
                    </div>
                    <div className="input-box">
                        <p>Don't have an account? <Link to='register'>Register</Link></p>
                    </div>
                </form>
                <h3>Or Login with...</h3>
                <ul className="social">
                    <li><FaFacebookSquare color={'#0083EE'}/></li>
                    <li><FcGoogle /></li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Login