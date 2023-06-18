
/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import React from 'react'
import MyImage from '../../public/assets/image_icon.png';
// import '../styles/Login.css'
// change the name of the function to match the name of the file
const Login = () => {

    const schema = yup.object().shape({
        email: yup.string().email().required("Email is required"),
        password: yup.string().required("Password Is Required")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        console.log(data);
    }
    
    return (
        <React.Fragment>
            {/* Write Your Normal HTml Here */}
            <div className='page'>
                <div className='left'>
                    <div className='left-content'>
                        <h1>Welcome!</h1>
                        <p>Sign in to continue</p>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="text" placeholder='Type your email' />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder='8+ characters' />
                        </div>
                        <button>Login</button>
                        <h5>Don't have an Account? <a href="register.html">Sign Up</a></h5>
                        <button>Login as Admin</button>
                    </div>
                </div>
                <div className='right'>
                    <img src={MyImage} alt="image" />
                </div>
            </div>

        </React.Fragment>
    );
};

export default Login;
