import './SignIn.css'
import React from 'react';
import axios from "axios"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export function SignIn() {
    const nav = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

  return (
    <div className='body'>
    <div className="wrapper">
        <h1>Login</h1>
        <div className="box">
          <input onChange={(e)=>{
            setUsername(e.target.value)
          }} type="text" placeholder="Username" required />
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="box">
          <input onChange={(e)=>{
            setPassword(e.target.value)
          }} type="password" placeholder="Password" required />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--<path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
        </div>

        <div className="remember-forget">
          <label><input type="checkbox" />Remember Me?</label>
          <a href="#">Forget password?</a>
        </div>

        <button onClick = {async()=>{
            const res = await axios.post("http://localhost:3000/signin", {
                username : username,
                password : password
            })
            if(res.error)
            {
                alert("Some error")
                console.error(res.error)
                return
            }else
            console.log(res.data.token)
            sessionStorage.setItem('token', res.data.token)
            nav('/postlogin')
        }} className="submit-button">Sign In</button>

        <div  className="register">
          <p>Don't have an account?
            <a onClick={()=>{
                nav('/signup')
            }}>Register?</a>
          </p>
        </div>
    </div>
    </div>
  );
}
