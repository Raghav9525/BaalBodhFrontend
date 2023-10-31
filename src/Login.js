

import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar'

// import LoginValidation from './LoginValidation';


function Login() {

    // create state
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    // const [errors,setErrors]= useState({})

    // send login credential to server 
    const submitForm = (event) => {
        event.preventDefault();
        // setErrors(LoginValidation(values));
        axios.post("https://baalbodh.onrender.com/login", values)
            .then((res) => {
                if (res.data.success) {
                    navigate('/admin');
                }
                else {

                }

            })
            .catch((err) => {
                console.error(err);
                // Handle error
            });
    }

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    return (
        <div>
            <div id="login" className='container-fluid vh-90' style={{ backgroundColor: "#d9e4fd" }}>
                <div className=' row  rounded ' >
                    <div class="col-sm-3"></div>
                    <div class="col-sm-6 mt-4 mb-3">
                        <div class="card p-4 " >
                            <form onSubmit={submitForm}>
                                <div class="mb-2">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleInput}
                                        class="form-control"
                                        id="exampleInputEmail1"
                                    />
                                    {/* {errors.email && <span className='text-danger'> {errors.email}</span>} */}
                                </div>

                                <div class="mb-2">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        class="form-control"
                                        id="exampleInputPassword1"
                                        onChange={handleInput}
                                    />
                                    {/* {errors.password && <span className='text-danger'> {errors.password}</span>} */}
                                </div>

                                <button type="submit" onClick={submitForm} class="btn btn-primary">Login</button>
                                <br />
                                <NavLink to="/signup">New user?Create Account</NavLink>
                            </form>
                        </div>
                    </div>
                    <div class="col-sm-3"></div>

                </div>
            </div>
        </div>
    )
}

export default Login