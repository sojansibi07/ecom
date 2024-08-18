import { useState, useEffect, React} from 'react';
import axios from 'axios';
import './css/LoginStyle.css';
import NavBar from './navbar';
function Register(){

    let [userName, setUserName] = useState('')
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [rePassword, setRePassword] = useState('');
    let [result, setResult] = useState('');

    function handleLogin() {
          setResult({userName, password})
    }

    return(
      <>
      <NavBar />
      <div id='MainBody'>
        <div className='register-box'>
            <div className='login-contents'>
                <h1>Register</h1>
                <input  onChange={(e) => setUserName(e.target.value) } type="text" className='inps reg' placeholder='Username'/>
                <input  onChange={(e) => setEmail(e.target.value) } type="text" className='inps reg' placeholder='Email'/>
                <input  onChange={(e) => setPassword(e.target.value) } type="password" className='inps reg' placeholder='Password' />
                <input  onChange={(e) => setRePassword(e.target.value) } type="password" className='inps reg' placeholder='Re-Password' />
                <button className='signin-button reg' onClick={handleLogin} >Sign Up</button>
                <a href="/login" className='link-register'>Already have an account? Sign In!</a>
      </div> 
      </div> 
      </div> 
      </>
    )
}

export default Register;