
import React from 'react';
import './login.css';
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='login'>
            <Link to='/'>
            <img className='login-logo'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
            </Link>

            <div className="login-container">
                <h1>Sing-In</h1>
                <form action="">

                    <h5>Email</h5>
                    <input type="text"/>
                    <h5>Password</h5>
                    <input type="password"/>
                    <button className='sign-in-button'>Sign In</button>
                </form>
                <p>By sining-in you Agree With trams and condition</p>
                <button className='register-button'>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
