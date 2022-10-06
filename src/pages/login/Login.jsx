import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <h1>LOGIN</h1>
        <form action="">
          <div className="login__form--id">
            <input type="text" name="id" id="id" placeholder='ID' required/>
          </div>
          <div className="login__form--password">
            <input type="password" name="pw" id="pw" placeholder='Password' required />
          </div> 
          <div className="login__form--button">
            <input type="submit" value="Login" />
          </div>
          <div className="login__form--signup">
           <Link to="/signup">회원가입</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login