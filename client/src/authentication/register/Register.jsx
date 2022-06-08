import React from 'react'
import { Link } from 'react-router-dom'

import './Register.css'
import image2 from '../../images/2.jpg'

const Register = () => {
  return (
    <section>
        <div className="image-box">
            <img src={image2} alt="" />
        </div>
        <div className="content-box">
            <div className="form-box">
                <h2>Register</h2>
                <form>
                    <div className="input-box">
                        <span>Username</span>
                        <input type="text" />
                    </div>
                    <div className="input-box">
                        <span>Email</span>
                        <input type="text" />
                    </div>
                    <div className="input-box">
                        <span>Password</span>
                        <input type="password" />
                    </div>
                    <div className="input-box">
                        <span>Re-enter Password</span>
                        <input type="password" />
                    </div>
                    <div className="input-box">
                        <button>Register</button>
                    </div>
                    <div className="input-box">
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Register