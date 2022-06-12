import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc";
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
 
import './Login.css'
import image1 from '../../images/1.jpg'
import { login, reset } from '../../redux/auth/authSlice'
import Spinner from '../../components/spinner/Spinner'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { 
        user, 
        isLoading, 
        isError, 
        isSuccess, 
        message 
    } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (isSuccess || user) {
            navigate('/movies');
        }

        dispatch(reset());

    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email,
            password
        }

        dispatch(login(userData));
    }

    if (isLoading) {
        return <Spinner />
    }

  return (
    <section>
        <div className="image-box">
            <img src={image1} alt="" />
        </div>
        <div className="content-box">
            <div className="form-box">
                <h2>Login</h2>
                <form onSubmit={onSubmit}>
                    <div className="input-box">
                        <span>Email</span>
                        <input 
                            type="text"
                            id="email" 
                            name="email" 
                            value={email} 
                            placeholder="Enter your email address" 
                            onChange={onChange} 
                        />
                    </div>
                    <div className="input-box">
                        <span>Password</span>
                        <input 
                            type="password"
                            id="password" 
                            name="password" 
                            value={password} 
                            placeholder="Enter your password" 
                            onChange={onChange} 
                        />
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
                        <p>Don't have an account? <Link to='/register'>Register</Link></p>
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