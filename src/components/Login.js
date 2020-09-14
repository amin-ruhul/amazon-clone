
import React,{useState} from 'react';
import './login.css';
import { Link,useHistory } from 'react-router-dom';
import {auth} from '../firebase';

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();
        // firebase login 
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/')
        })
        .catch(error =>(error.message))
    }

    const register = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) =>{
            console.log(auth);
            if(auth){
                history.push('/');
            }
        })
        .catch(error => alert(error.message));
    }
    return (
        <div className='login'>
            <Link to='/'>
            <img className='login-logo'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
            </Link>

            <div className="login-container">
                <h1>Sing-In</h1>
                <form>

                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value = {password} onChange = {e=> setPassword(e.target.value)}/>

                    <button className='sign-in-button' type ="submit" onClick = {signIn}>
                    Sign In</button>
                </form>
                <p>By sining-in you Agree With trams and condition</p>

                <button className='register-button' onClick={register}>
                Create Your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login
