import { useState, useEffect, React} from 'react';
import axios from 'axios';
import './css/LoginStyle.css';
import NavBar from './navbar';
function Login(){

    let [userName, setUserName] = useState('')
    let [password, setPassword] = useState('')
    let [result, setResult] = useState('');

    const loginUser = async() => {
      const response = await axios.post('http://localhost:2000/login', {userName, password});
      setResult(response.data)
      console.log(result)
      
    }

    function handleLogin() {
          setResult({userName, password})
    }

    return(
      <>
      <NavBar />
      <div id='MainBody'>
        <div className='login-box'>
            <div className='login-contents'>
                <h1>Login</h1>
                <input  onChange={(e) => setUserName(e.target.value) } type="text" className='inps' placeholder='Username'/>
                <input  onChange={(e) => setPassword(e.target.value) } type="password" className='inps' placeholder='Password' />
                <button className='signin-button' onClick={handleLogin} >Sign in</button>
                <a href="/register" className='link-register'>Don't have an account? Sign up!</a>
      </div> 
      </div> 
      </div> 
      </>
    )
}

export default Login;