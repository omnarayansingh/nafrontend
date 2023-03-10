import React, {useState} from "react";
import "./login.css";
import axios from "axios"
import { useNavigate } from 'react-router-dom';


const Login = ( { setLoginUser }) => {
    
      const history = useNavigate()  

      const [ user, setUser] = useState({
            email:"",
            password:""
        })
    
        const handleChange = e => {
            const { name, value } = e.target
            setUser({
                ...user,
                [name]: value
            })
        }
        const Login = () => {
            axios.post("https://nabackend-omnarayansingh.vercel.app/login", user)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.user)
                history("/")
        })
        }
        
    
      return (
            <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={Login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history("/register")}>Register</div>
        </div>
      )
}
export default Login;
