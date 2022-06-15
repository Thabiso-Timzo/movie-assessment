import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
 
import './Login.css'
import image1 from '../../images/1.jpg'
import { login, reset } from '../../redux/auth/authSlice'
import Spinner from '../../components/spinner/Spinner'

const Login = () => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

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
            history.push('/movies');
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

        const userData = {
            email,
            password
        }

        dispatch(login(userData));
    }

    if (isLoading) {
        return <Spinner style={{alignItems: 'center'}} />
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
                    <div className="input-box">
                        <button>Login</button>
                    </div>
                    <div className="input-box">
                        <p>Don't have an account? <Link to='/register'>Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Login