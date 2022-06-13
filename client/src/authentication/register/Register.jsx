import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import './Register.css'
import image2 from '../../images/2.jpg'
import { register, reset } from '../../redux/auth/authSlice'
import Spinner from '../../components/spinner/Spinner'

const Register = () => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const { name, email, password, password2 } = formData;

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
            history.push('/login');
        }

        dispatch(reset());

    }, [user, isError, isSuccess, message, history, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== password2) {
            toast.error('Passwords do not match.')
        } else {
            const userData = {
                name, email, password
            }

            dispatch(register(userData))
        }
    }

    if (isLoading) {
        return <Spinner />
    }

  return (
    <section>
        <div className="image-box">
            <img src={image2} alt="" />
        </div>
        <div className="content-box">
            <div className="form-box">
                <h2>Register</h2>
                <form onSubmit={onSubmit}>
                    <div className="input-box">
                        <span>Full name</span>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={name} 
                            placeholder="Enter your user full name" 
                            onChange={onChange}
                        />
                    </div>
                    <div className="input-box">
                        <span>Email</span>
                        <input 
                            type="text"
                            id="email" 
                            name="email" 
                            value={email} 
                            placeholder="Enter your email" 
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
                    <div className="input-box">
                        <span>Confirm Password</span>
                        <input 
                            type="password" 
                            id="password2" 
                            name="password2" 
                            value={password2} 
                            placeholder="Confirm your password" 
                            onChange={onChange}
                        />
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