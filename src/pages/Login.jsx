import React from 'react'
import '../styles/Login.css'
// change the name of the function to match the name of the file
const Login = () => {
    return (
        <React.Fragment>
            {/* Write Your Normal HTml Here */}
            <div className='page'>
               <div className='one'>
                <h1>WELCOME!</h1>
            </div>
            <div className='two'>
                <p>Sign in to continue</p>
            </div>
            <div className='three'>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder='Type your email' />
            </div>
            <div className='four'>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='8+ characters' />
            </div>
            <div>
            <button className='login-button'>
                <span className='login-button-text'>Login</span>
            </button>
            </div>
            <div>
               <p>Don't have an Account? Sign Up</p> 
            </div>
            <button>Login as Admin</button> 
            </div>
            
        </React.Fragment>
    )
}

// Also change the name of the function here
export default Login;