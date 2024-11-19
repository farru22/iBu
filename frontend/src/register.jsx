import './SignIn.css'
import React from 'react';
import axios from "axios"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export function Register() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [name,setName] = useState("")
    const nav = useNavigate()
  return (
    <div className='body'>
    <div className="wrapper">
        <h1>Sign Up</h1>
        <div className="box">
          <input onChange={(e)=>{
            setName(e.target.value)
          }} type="text" placeholder="Name" required />
          <i className="fa-solid fa-user"></i>
        </div>
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
          <i className="fa-solid fa-lock"></i>
        </div>

        <div className="remember-forget">
          <label><input type="checkbox" />Remember Me?</label>
          <a href="#">Forget password?</a>
        </div>

        <button onClick = {async()=>{
            const res = await axios.post("http://localhost:3000/signup", {
            name : name,    
            email : username,
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

        <div className="register">
          <p>Already have an account?
            <a onClick={()=>{
                nav("/signin")
            }}>Sign In</a>
          </p>
        </div>
    </div>
    </div>
  );
}
